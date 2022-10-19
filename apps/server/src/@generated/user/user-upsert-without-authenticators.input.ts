import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAuthenticatorsInput } from './user-update-without-authenticators.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAuthenticatorsInput } from './user-create-without-authenticators.input';

@InputType()
export class UserUpsertWithoutAuthenticatorsInput {

    @Field(() => UserUpdateWithoutAuthenticatorsInput, {nullable:false})
    @Type(() => UserUpdateWithoutAuthenticatorsInput)
    update!: UserUpdateWithoutAuthenticatorsInput;

    @Field(() => UserCreateWithoutAuthenticatorsInput, {nullable:false})
    @Type(() => UserCreateWithoutAuthenticatorsInput)
    create!: UserCreateWithoutAuthenticatorsInput;
}
