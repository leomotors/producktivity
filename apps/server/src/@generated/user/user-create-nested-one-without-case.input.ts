import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCaseInput } from './user-create-without-case.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCaseInput } from './user-create-or-connect-without-case.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCaseInput {

    @Field(() => UserCreateWithoutCaseInput, {nullable:true})
    @Type(() => UserCreateWithoutCaseInput)
    create?: UserCreateWithoutCaseInput;

    @Field(() => UserCreateOrConnectWithoutCaseInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCaseInput)
    connectOrCreate?: UserCreateOrConnectWithoutCaseInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
