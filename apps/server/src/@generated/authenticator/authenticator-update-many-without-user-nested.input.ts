import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticatorCreateWithoutUserInput } from './authenticator-create-without-user.input';
import { Type } from 'class-transformer';
import { AuthenticatorCreateOrConnectWithoutUserInput } from './authenticator-create-or-connect-without-user.input';
import { AuthenticatorUpsertWithWhereUniqueWithoutUserInput } from './authenticator-upsert-with-where-unique-without-user.input';
import { AuthenticatorCreateManyUserInputEnvelope } from './authenticator-create-many-user-input-envelope.input';
import { AuthenticatorWhereUniqueInput } from './authenticator-where-unique.input';
import { AuthenticatorUpdateWithWhereUniqueWithoutUserInput } from './authenticator-update-with-where-unique-without-user.input';
import { AuthenticatorUpdateManyWithWhereWithoutUserInput } from './authenticator-update-many-with-where-without-user.input';
import { AuthenticatorScalarWhereInput } from './authenticator-scalar-where.input';

@InputType()
export class AuthenticatorUpdateManyWithoutUserNestedInput {

    @Field(() => [AuthenticatorCreateWithoutUserInput], {nullable:true})
    @Type(() => AuthenticatorCreateWithoutUserInput)
    create?: Array<AuthenticatorCreateWithoutUserInput>;

    @Field(() => [AuthenticatorCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AuthenticatorCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AuthenticatorCreateOrConnectWithoutUserInput>;

    @Field(() => [AuthenticatorUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AuthenticatorUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<AuthenticatorUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => AuthenticatorCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AuthenticatorCreateManyUserInputEnvelope)
    createMany?: AuthenticatorCreateManyUserInputEnvelope;

    @Field(() => [AuthenticatorWhereUniqueInput], {nullable:true})
    @Type(() => AuthenticatorWhereUniqueInput)
    set?: Array<AuthenticatorWhereUniqueInput>;

    @Field(() => [AuthenticatorWhereUniqueInput], {nullable:true})
    @Type(() => AuthenticatorWhereUniqueInput)
    disconnect?: Array<AuthenticatorWhereUniqueInput>;

    @Field(() => [AuthenticatorWhereUniqueInput], {nullable:true})
    @Type(() => AuthenticatorWhereUniqueInput)
    delete?: Array<AuthenticatorWhereUniqueInput>;

    @Field(() => [AuthenticatorWhereUniqueInput], {nullable:true})
    @Type(() => AuthenticatorWhereUniqueInput)
    connect?: Array<AuthenticatorWhereUniqueInput>;

    @Field(() => [AuthenticatorUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AuthenticatorUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<AuthenticatorUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [AuthenticatorUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => AuthenticatorUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<AuthenticatorUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [AuthenticatorScalarWhereInput], {nullable:true})
    @Type(() => AuthenticatorScalarWhereInput)
    deleteMany?: Array<AuthenticatorScalarWhereInput>;
}
