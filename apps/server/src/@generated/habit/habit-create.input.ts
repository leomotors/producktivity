import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreatetagsInput } from './habit-createtags.input';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutHabitsInput } from '../user/user-create-nested-one-without-habits.input';

@InputType()
export class HabitCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => HabitCreatetagsInput, {nullable:true})
    tags?: HabitCreatetagsInput;

    @Field(() => Int, {nullable:true})
    currentCount?: number;

    @Field(() => Int, {nullable:true})
    targetCount?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutHabitsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutHabitsInput;
}
