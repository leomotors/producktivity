import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthenticatorWhereUniqueInput } from './authenticator-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAuthenticatorArgs {

    @Field(() => AuthenticatorWhereUniqueInput, {nullable:false})
    @Type(() => AuthenticatorWhereUniqueInput)
    where!: AuthenticatorWhereUniqueInput;
}
