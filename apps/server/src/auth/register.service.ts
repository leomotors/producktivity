import { BadRequestException, Injectable } from "@nestjs/common";

import { PrismaService } from "src/prisma.service";

import { decode, encode } from "base64-arraybuffer";
import * as cbor from "cbor";
import * as crypto from "node:crypto";

import { RsaService } from "./rsa.service";
import { ClientData } from "./types";

interface AttestationCredential {
  fmt: "none" | "packed" | "fido-u2f";
  attStmt: {
    alg?: number;
    sig?: Buffer;
  };
  authData: Buffer;
}

@Injectable()
export class RegisterService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly rsaService: RsaService
  ) {}

  async createAuthenticatorChallenge(userId: string) {
    // generate random challenge
    const generatedChallenge = encode(crypto.randomBytes(32));

    // push challenge to temporary bin
    await this.prisma.challenge.upsert({
      where: {
        userId,
      },
      update: {
        challenge: generatedChallenge,
        createdAt: new Date(),
      },
      create: {
        userId,
        challenge: generatedChallenge,
      },
    });

    return generatedChallenge;
  }

  async completeAuthenticatorChallenge(
    attestationObject: string,
    clientDataJSON: string
  ) {
    const clientData: ClientData = JSON.parse(
      Buffer.from(decode(clientDataJSON)).toString()
    );

    // even clientData.challenge is decoded from base64 above, somehow browser navigator sent back as base64url
    const encodedChallenge = encode(
      Buffer.from(clientData.challenge, "base64url")
    );

    // find challenge pair
    const challenge = await this.prisma.challenge.findFirst({
      where: {
        challenge: encodedChallenge,
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
          },
        },
      },
    });

    // if challenge of **non registered user** does not match, it's means that user already completed regis or challenge response are incorrect
    if (challenge === null) {
      throw new BadRequestException("Challenge failed");
    }

    // process attestation into readable authenticator
    const attestationBuffer = Buffer.from(decode(attestationObject));
    const ctapMakeCredentialResponse: AttestationCredential =
      cbor.decodeAllSync(attestationBuffer)[0];

    const decodedAuthData = this.rsaService.decodeRegisterAuthData(
      ctapMakeCredentialResponse.authData
    );
    const publicKey = this.rsaService.COSEECDHAtoPKCS(
      decodedAuthData.COSEPublicKey
    );

    const authenticatorPayload = {
      fmt: ctapMakeCredentialResponse.fmt,
      publicKey: encode(publicKey),
      counter: decodedAuthData.counter,
      credentialId: encode(decodedAuthData.credID),
    };

    // push authenticator to database
    await Promise.all([
      this.prisma.authenticator.create({
        data: {
          userId: challenge.user.id,
          ...authenticatorPayload,
        },
      }),
      this.prisma.challenge.delete({
        where: {
          id: challenge.id,
        },
      }),
    ]);

    return challenge.user;
  }
}
