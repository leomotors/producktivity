import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticatorWhereUniqueInput } from './authenticator-where-unique.input';
import { Type } from 'class-transformer';
import { AuthenticatorUpdateWithoutUserInput } from './authenticator-update-without-user.input';

@InputType()
export class AuthenticatorUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => AuthenticatorWhereUniqueInput, {nullable:false})
    @Type(() => AuthenticatorWhereUniqueInput)
    where!: AuthenticatorWhereUniqueInput;

    @Field(() => AuthenticatorUpdateWithoutUserInput, {nullable:false})
    @Type(() => AuthenticatorUpdateWithoutUserInput)
    data!: AuthenticatorUpdateWithoutUserInput;
}
