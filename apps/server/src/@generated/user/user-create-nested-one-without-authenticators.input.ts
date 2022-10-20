import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAuthenticatorsInput } from './user-create-without-authenticators.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAuthenticatorsInput } from './user-create-or-connect-without-authenticators.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAuthenticatorsInput {

    @Field(() => UserCreateWithoutAuthenticatorsInput, {nullable:true})
    @Type(() => UserCreateWithoutAuthenticatorsInput)
    create?: UserCreateWithoutAuthenticatorsInput;

    @Field(() => UserCreateOrConnectWithoutAuthenticatorsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAuthenticatorsInput)
    connectOrCreate?: UserCreateOrConnectWithoutAuthenticatorsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
