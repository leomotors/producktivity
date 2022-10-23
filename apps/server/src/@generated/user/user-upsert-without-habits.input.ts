import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutHabitsInput } from './user-update-without-habits.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutHabitsInput } from './user-create-without-habits.input';

@InputType()
export class UserUpsertWithoutHabitsInput {

    @Field(() => UserUpdateWithoutHabitsInput, {nullable:false})
    @Type(() => UserUpdateWithoutHabitsInput)
    update!: UserUpdateWithoutHabitsInput;

    @Field(() => UserCreateWithoutHabitsInput, {nullable:false})
    @Type(() => UserCreateWithoutHabitsInput)
    create!: UserCreateWithoutHabitsInput;
}
