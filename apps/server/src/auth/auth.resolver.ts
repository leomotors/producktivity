import { Args, Mutation, Resolver } from "@nestjs/graphql";

import {
  AuthenticatorChallenge,
  AuthorizationToken,
  LoginChallenge,
  RequestLoginRegisterArgs,
  VerifyLoginArgs,
  VerifyRegisterArgs,
} from "./auth.dto";
import { AuthService } from "./auth.service";

@Resolver()
export class AuthResolver {
  constructor(private readonly service: AuthService) {}

  @Mutation(() => AuthenticatorChallenge)
  requestRegister(
    @Args() input: RequestLoginRegisterArgs
  ): Promise<AuthenticatorChallenge> {
    return this.service.requestRegister(input.username);
  }

  @Mutation(() => AuthorizationToken)
  verifyRegister(
    @Args() input: VerifyRegisterArgs
  ): Promise<AuthorizationToken> {
    return this.service.verifyRegister(input);
  }

  @Mutation(() => LoginChallenge)
  requestLogin(
    @Args() input: RequestLoginRegisterArgs
  ): Promise<LoginChallenge> {
    return this.service.requestLogin(input.username);
  }

  @Mutation(() => AuthorizationToken)
  verifyLogin(@Args() input: VerifyLoginArgs): Promise<AuthorizationToken> {
    return this.service.verifyLogin(input);
  }
}
