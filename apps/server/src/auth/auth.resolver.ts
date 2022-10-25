import { Args, Mutation, Resolver } from "@nestjs/graphql";

import {
  AuthenticatorChallenge,
  AuthorizationToken,
  LoginChallenge,
  VerifyLoginArgs,
  VerifyRegisterArgs,
} from "./auth.dto";
import { UsernameValidation } from "./auth.pipe";
import { AuthService } from "./auth.service";

@Resolver()
export class AuthResolver {
  constructor(private readonly service: AuthService) {}

  @Mutation(() => AuthenticatorChallenge)
  requestRegister(
    @Args("username", UsernameValidation) username: string
  ): Promise<AuthenticatorChallenge> {
    return this.service.requestRegister(username);
  }

  @Mutation(() => AuthorizationToken)
  verifyRegister(
    @Args() input: VerifyRegisterArgs
  ): Promise<AuthorizationToken> {
    return this.service.verifyRegister(input);
  }

  @Mutation(() => LoginChallenge)
  requestLogin(
    @Args("username", UsernameValidation) username: string
  ): Promise<LoginChallenge> {
    return this.service.requestLogin(username);
  }

  @Mutation(() => AuthorizationToken)
  verifyLogin(@Args() input: VerifyLoginArgs): Promise<AuthorizationToken> {
    return this.service.verifyLogin(input);
  }
}
