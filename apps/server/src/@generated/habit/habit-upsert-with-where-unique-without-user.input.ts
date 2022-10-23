import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { Type } from 'class-transformer';
import { HabitUpdateWithoutUserInput } from './habit-update-without-user.input';
import { HabitCreateWithoutUserInput } from './habit-create-without-user.input';

@InputType()
export class HabitUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => HabitWhereUniqueInput, {nullable:false})
    @Type(() => HabitWhereUniqueInput)
    where!: HabitWhereUniqueInput;

    @Field(() => HabitUpdateWithoutUserInput, {nullable:false})
    @Type(() => HabitUpdateWithoutUserInput)
    update!: HabitUpdateWithoutUserInput;

    @Field(() => HabitCreateWithoutUserInput, {nullable:false})
    @Type(() => HabitCreateWithoutUserInput)
    create!: HabitCreateWithoutUserInput;
}
