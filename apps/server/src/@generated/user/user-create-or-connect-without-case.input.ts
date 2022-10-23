import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCaseInput } from './user-create-without-case.input';

@InputType()
export class UserCreateOrConnectWithoutCaseInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutCaseInput, {nullable:false})
    @Type(() => UserCreateWithoutCaseInput)
    create!: UserCreateWithoutCaseInput;
}
