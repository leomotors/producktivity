import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticatorCreateWithoutUserInput } from './authenticator-create-without-user.input';
import { Type } from 'class-transformer';
import { AuthenticatorCreateOrConnectWithoutUserInput } from './authenticator-create-or-connect-without-user.input';
import { AuthenticatorCreateManyUserInputEnvelope } from './authenticator-create-many-user-input-envelope.input';
import { AuthenticatorWhereUniqueInput } from './authenticator-where-unique.input';

@InputType()
export class AuthenticatorUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [AuthenticatorCreateWithoutUserInput], {nullable:true})
    @Type(() => AuthenticatorCreateWithoutUserInput)
    create?: Array<AuthenticatorCreateWithoutUserInput>;

    @Field(() => [AuthenticatorCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AuthenticatorCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AuthenticatorCreateOrConnectWithoutUserInput>;

    @Field(() => AuthenticatorCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AuthenticatorCreateManyUserInputEnvelope)
    createMany?: AuthenticatorCreateManyUserInputEnvelope;

    @Field(() => [AuthenticatorWhereUniqueInput], {nullable:true})
    @Type(() => AuthenticatorWhereUniqueInput)
    connect?: Array<AuthenticatorWhereUniqueInput>;
}
