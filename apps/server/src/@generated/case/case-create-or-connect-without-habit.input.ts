import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseWhereUniqueInput } from './case-where-unique.input';
import { Type } from 'class-transformer';
import { CaseCreateWithoutHabitInput } from './case-create-without-habit.input';

@InputType()
export class CaseCreateOrConnectWithoutHabitInput {

    @Field(() => CaseWhereUniqueInput, {nullable:false})
    @Type(() => CaseWhereUniqueInput)
    where!: CaseWhereUniqueInput;

    @Field(() => CaseCreateWithoutHabitInput, {nullable:false})
    @Type(() => CaseCreateWithoutHabitInput)
    create!: CaseCreateWithoutHabitInput;
}
