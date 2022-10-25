import { BadRequestException, Injectable } from "@nestjs/common";

import { PrismaService } from "src/prisma.service";

import { decode, encode } from "base64-arraybuffer";
import * as jwt from "jsonwebtoken";
import * as crypto from "node:crypto";

import {
  AuthenticatorChallenge,
  AuthorizationToken,
  LoginChallenge,
  VerifyLoginArgs,
  VerifyRegisterArgs,
} from "./auth.dto";
import { RegisterService } from "./register.service";
import { RsaService } from "./rsa.service";
import { ClientData } from "./types";

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly registerService: RegisterService,
    private readonly rsaService: RsaService
  ) {}

  async requestRegister(username: string): Promise<AuthenticatorChallenge> {
    // check for existing user
    const user = await this.prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (user?.registered) {
      throw new BadRequestException("User already registered");
    }

    let userId = user?.id;

    // if user not found then create a new one
    if (user === null) {
      const newUser = await this.prisma.user.create({
        data: {
          username,
        },
      });

      userId = newUser.id;
    }

    const challenge = await this.registerService.createAuthenticatorChallenge(
      userId as string
    );

    return {
      relyingParty: {
        name:
          process.env.npm_lifecycle_event === "dev"
            ? "producktivity-dev"
            : "producktivity-prod",
        id:
          process.env.npm_lifecycle_event === "dev"
            ? "localhost"
            : "producktivity.pages.dev",
      },
      userId: userId as string,
      challenge,
    };
  }

  async verifyRegister(input: VerifyRegisterArgs): Promise<AuthorizationToken> {
    const user = await this.registerService.completeAuthenticatorChallenge(
      input.response.attestationObject,
      input.response.clientDataJSON
    );

    // allow user to be registered
    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        registered: true,
      },
    });

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "7d",
      }
    );

    return { token };
  }

  async requestLogin(username: string): Promise<LoginChallenge> {
    const authenticators = await this.prisma.authenticator.findMany({
      where: {
        user: {
          username: username.toLowerCase(),
          registered: true,
        },
      },
      include: {
        user: {
          select: {
            id: true,
          },
        },
      },
    });

    // if array length is 0, means there's no user registered yet
    if (authenticators.length === 0) {
      throw new BadRequestException("User is not registered");
    }

    // generate random challenge
    const generatedChallenge = encode(crypto.randomBytes(32));

    // push challenge to temporary bin
    await this.prisma.challenge.upsert({
      where: {
        userId: authenticators[0].user.id,
      },
      update: {
        challenge: generatedChallenge,
        createdAt: new Date(),
      },
      create: {
        userId: authenticators[0].user.id,
        challenge: generatedChallenge,
      },
    });

    return {
      challenge: generatedChallenge,
      allowedCredentials: authenticators.map((authenticator) => ({
        type: "public-key",
        id: authenticator.credentialId,
      })),
    };
  }

  async verifyLogin(input: VerifyLoginArgs): Promise<AuthorizationToken> {
    const { id, response } = input;

    const decodedRequest = {
      authenticatorData: decode(response.authenticatorData),
      clientDataJSON: decode(response.clientDataJSON),
      signature: decode(response.signature),
    };

    const clientData: ClientData = JSON.parse(
      Buffer.from(decodedRequest.clientDataJSON).toString()
    );

    // even clientData.challenge is decoded from base64 above, somehow browser navigator sent back as base64url
    const encodedChallenge = encode(
      Buffer.from(clientData.challenge, "base64url")
    );

    const [authenticator, challenge] = await Promise.all([
      this.prisma.authenticator.findFirst({
        where: {
          credentialId: encode(Buffer.from(id, "base64url")),
        },
        include: {
          user: {
            select: {
              id: true,
              username: true,
            },
          },
        },
      }),
      this.prisma.challenge.findFirst({
        where: {
          challenge: encodedChallenge,
          user: {
            registered: true,
          },
        },
        include: {
          user: {
            select: {
              id: true,
            },
          },
        },
      }),
    ]);

    if (challenge === null) {
      throw new BadRequestException("Challenge Response does not match");
    } else if (authenticator === null) {
      throw new BadRequestException("Authenticator not found");
    } else if (authenticator.userId !== challenge.userId) {
      throw new BadRequestException("Authenticator and Challenge do not match");
    }

    const decodedAuthData = this.rsaService.decodeLoginAuthData(
      Buffer.from(decodedRequest.authenticatorData)
    );

    const clientDataHash = this.rsaService.getSha256Hash(
      Buffer.from(decodedRequest.clientDataJSON)
    );
    const signatureBase = Buffer.concat([
      decodedAuthData.rpIdHash,
      decodedAuthData.flagsBuf,
      decodedAuthData.counterBuf,
      clientDataHash,
    ]);
    const publicKey = this.rsaService.ASN1toPEM(
      Buffer.from(decode(authenticator.publicKey))
    );
    const signature = Buffer.from(decodedRequest.signature);

    const verified = this.rsaService.verifySignature(
      signature,
      signatureBase,
      publicKey
    );

    if (!verified) {
      throw new BadRequestException(
        "Signature of authenticator cannot be verified"
      );
    }

    const token = jwt.sign(
      {
        id: authenticator.user.id,
        username: authenticator.user.username,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "7d",
      }
    );

    return { token };
  }

  findUser(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }
}
