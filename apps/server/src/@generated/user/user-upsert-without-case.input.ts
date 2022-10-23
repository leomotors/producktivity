import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCaseInput } from './user-update-without-case.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCaseInput } from './user-create-without-case.input';

@InputType()
export class UserUpsertWithoutCaseInput {

    @Field(() => UserUpdateWithoutCaseInput, {nullable:false})
    @Type(() => UserUpdateWithoutCaseInput)
    update!: UserUpdateWithoutCaseInput;

    @Field(() => UserCreateWithoutCaseInput, {nullable:false})
    @Type(() => UserCreateWithoutCaseInput)
    create!: UserCreateWithoutCaseInput;
}
