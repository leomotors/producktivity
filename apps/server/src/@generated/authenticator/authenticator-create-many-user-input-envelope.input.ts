import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticatorCreateManyUserInput } from './authenticator-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class AuthenticatorCreateManyUserInputEnvelope {

    @Field(() => [AuthenticatorCreateManyUserInput], {nullable:false})
    @Type(() => AuthenticatorCreateManyUserInput)
    data!: Array<AuthenticatorCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
