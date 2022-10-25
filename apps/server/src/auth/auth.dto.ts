import { ArgsType, Field, InputType, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class RelyingParty {
  @Field()
  name!: string;

  @Field()
  id!: string;
}

@ObjectType()
export class AuthenticatorChallenge {
  @Field()
  userId!: string;

  @Field()
  challenge!: string;

  @Field(() => RelyingParty)
  relyingParty!: RelyingParty;
}

@InputType()
export class RegisterResponse {
  @Field()
  attestationObject!: string;

  @Field()
  clientDataJSON!: string;
}

@ArgsType()
export class VerifyRegisterArgs {
  @Field()
  id!: string;

  @Field()
  rawId!: string;

  @Field()
  type!: string;

  @Field(() => RegisterResponse)
  response!: RegisterResponse;
}

@ObjectType()
export class AuthorizationToken {
  @Field()
  token!: string;
}

@ObjectType()
export class AllowedCredentials {
  @Field()
  type!: PublicKeyCredentialType;

  @Field()
  id!: string;
}

@ObjectType()
export class LoginChallenge {
  @Field()
  challenge!: string;

  @Field(() => [AllowedCredentials])
  allowedCredentials!: AllowedCredentials[];
}

@InputType()
export class LoginResponse {
  @Field()
  authenticatorData!: string;

  @Field()
  clientDataJSON!: string;

  @Field()
  signature!: string;
}

@ArgsType()
export class VerifyLoginArgs {
  @Field()
  id!: string;

  @Field(() => LoginResponse)
  response!: LoginResponse;
}
