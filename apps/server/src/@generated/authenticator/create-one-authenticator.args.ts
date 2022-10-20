import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthenticatorCreateInput } from './authenticator-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAuthenticatorArgs {

    @Field(() => AuthenticatorCreateInput, {nullable:false})
    @Type(() => AuthenticatorCreateInput)
    data!: AuthenticatorCreateInput;
}
