import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticatorWhereUniqueInput } from './authenticator-where-unique.input';
import { Type } from 'class-transformer';
import { AuthenticatorUpdateWithoutUserInput } from './authenticator-update-without-user.input';
import { AuthenticatorCreateWithoutUserInput } from './authenticator-create-without-user.input';

@InputType()
export class AuthenticatorUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => AuthenticatorWhereUniqueInput, {nullable:false})
    @Type(() => AuthenticatorWhereUniqueInput)
    where!: AuthenticatorWhereUniqueInput;

    @Field(() => AuthenticatorUpdateWithoutUserInput, {nullable:false})
    @Type(() => AuthenticatorUpdateWithoutUserInput)
    update!: AuthenticatorUpdateWithoutUserInput;

    @Field(() => AuthenticatorCreateWithoutUserInput, {nullable:false})
    @Type(() => AuthenticatorCreateWithoutUserInput)
    create!: AuthenticatorCreateWithoutUserInput;
}
