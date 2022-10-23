import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseUpdateWithoutHabitInput } from './case-update-without-habit.input';
import { Type } from 'class-transformer';
import { CaseCreateWithoutHabitInput } from './case-create-without-habit.input';

@InputType()
export class CaseUpsertWithoutHabitInput {

    @Field(() => CaseUpdateWithoutHabitInput, {nullable:false})
    @Type(() => CaseUpdateWithoutHabitInput)
    update!: CaseUpdateWithoutHabitInput;

    @Field(() => CaseCreateWithoutHabitInput, {nullable:false})
    @Type(() => CaseCreateWithoutHabitInput)
    create!: CaseCreateWithoutHabitInput;
}
