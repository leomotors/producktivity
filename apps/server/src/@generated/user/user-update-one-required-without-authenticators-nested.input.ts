import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAuthenticatorsInput } from './user-create-without-authenticators.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAuthenticatorsInput } from './user-create-or-connect-without-authenticators.input';
import { UserUpsertWithoutAuthenticatorsInput } from './user-upsert-without-authenticators.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutAuthenticatorsInput } from './user-update-without-authenticators.input';

@InputType()
export class UserUpdateOneRequiredWithoutAuthenticatorsNestedInput {

    @Field(() => UserCreateWithoutAuthenticatorsInput, {nullable:true})
    @Type(() => UserCreateWithoutAuthenticatorsInput)
    create?: UserCreateWithoutAuthenticatorsInput;

    @Field(() => UserCreateOrConnectWithoutAuthenticatorsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAuthenticatorsInput)
    connectOrCreate?: UserCreateOrConnectWithoutAuthenticatorsInput;

    @Field(() => UserUpsertWithoutAuthenticatorsInput, {nullable:true})
    @Type(() => UserUpsertWithoutAuthenticatorsInput)
    upsert?: UserUpsertWithoutAuthenticatorsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutAuthenticatorsInput, {nullable:true})
    @Type(() => UserUpdateWithoutAuthenticatorsInput)
    update?: UserUpdateWithoutAuthenticatorsInput;
}
