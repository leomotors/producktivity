import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticatorWhereInput } from './authenticator-where.input';

@InputType()
export class AuthenticatorListRelationFilter {

    @Field(() => AuthenticatorWhereInput, {nullable:true})
    every?: AuthenticatorWhereInput;

    @Field(() => AuthenticatorWhereInput, {nullable:true})
    some?: AuthenticatorWhereInput;

    @Field(() => AuthenticatorWhereInput, {nullable:true})
    none?: AuthenticatorWhereInput;
}
