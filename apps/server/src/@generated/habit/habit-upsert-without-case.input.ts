import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitUpdateWithoutCaseInput } from './habit-update-without-case.input';
import { Type } from 'class-transformer';
import { HabitCreateWithoutCaseInput } from './habit-create-without-case.input';

@InputType()
export class HabitUpsertWithoutCaseInput {

    @Field(() => HabitUpdateWithoutCaseInput, {nullable:false})
    @Type(() => HabitUpdateWithoutCaseInput)
    update!: HabitUpdateWithoutCaseInput;

    @Field(() => HabitCreateWithoutCaseInput, {nullable:false})
    @Type(() => HabitCreateWithoutCaseInput)
    create!: HabitCreateWithoutCaseInput;
}
