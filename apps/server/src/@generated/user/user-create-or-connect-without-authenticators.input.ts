import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAuthenticatorsInput } from './user-create-without-authenticators.input';

@InputType()
export class UserCreateOrConnectWithoutAuthenticatorsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutAuthenticatorsInput, {nullable:false})
    @Type(() => UserCreateWithoutAuthenticatorsInput)
    create!: UserCreateWithoutAuthenticatorsInput;
}
