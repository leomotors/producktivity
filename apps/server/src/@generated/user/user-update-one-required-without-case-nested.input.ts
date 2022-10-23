import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCaseInput } from './user-create-without-case.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCaseInput } from './user-create-or-connect-without-case.input';
import { UserUpsertWithoutCaseInput } from './user-upsert-without-case.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCaseInput } from './user-update-without-case.input';

@InputType()
export class UserUpdateOneRequiredWithoutCaseNestedInput {

    @Field(() => UserCreateWithoutCaseInput, {nullable:true})
    @Type(() => UserCreateWithoutCaseInput)
    create?: UserCreateWithoutCaseInput;

    @Field(() => UserCreateOrConnectWithoutCaseInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCaseInput)
    connectOrCreate?: UserCreateOrConnectWithoutCaseInput;

    @Field(() => UserUpsertWithoutCaseInput, {nullable:true})
    @Type(() => UserUpsertWithoutCaseInput)
    upsert?: UserUpsertWithoutCaseInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutCaseInput, {nullable:true})
    @Type(() => UserUpdateWithoutCaseInput)
    update?: UserUpdateWithoutCaseInput;
}
