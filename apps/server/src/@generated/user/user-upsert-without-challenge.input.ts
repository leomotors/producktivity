import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutChallengeInput } from './user-update-without-challenge.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutChallengeInput } from './user-create-without-challenge.input';

@InputType()
export class UserUpsertWithoutChallengeInput {

    @Field(() => UserUpdateWithoutChallengeInput, {nullable:false})
    @Type(() => UserUpdateWithoutChallengeInput)
    update!: UserUpdateWithoutChallengeInput;

    @Field(() => UserCreateWithoutChallengeInput, {nullable:false})
    @Type(() => UserCreateWithoutChallengeInput)
    create!: UserCreateWithoutChallengeInput;
}
