import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticatorWhereUniqueInput } from './authenticator-where-unique.input';
import { Type } from 'class-transformer';
import { AuthenticatorCreateWithoutUserInput } from './authenticator-create-without-user.input';

@InputType()
export class AuthenticatorCreateOrConnectWithoutUserInput {

    @Field(() => AuthenticatorWhereUniqueInput, {nullable:false})
    @Type(() => AuthenticatorWhereUniqueInput)
    where!: AuthenticatorWhereUniqueInput;

    @Field(() => AuthenticatorCreateWithoutUserInput, {nullable:false})
    @Type(() => AuthenticatorCreateWithoutUserInput)
    create!: AuthenticatorCreateWithoutUserInput;
}
