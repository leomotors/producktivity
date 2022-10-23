import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { Type } from 'class-transformer';
import { HabitCreateWithoutCaseInput } from './habit-create-without-case.input';

@InputType()
export class HabitCreateOrConnectWithoutCaseInput {

    @Field(() => HabitWhereUniqueInput, {nullable:false})
    @Type(() => HabitWhereUniqueInput)
    where!: HabitWhereUniqueInput;

    @Field(() => HabitCreateWithoutCaseInput, {nullable:false})
    @Type(() => HabitCreateWithoutCaseInput)
    create!: HabitCreateWithoutCaseInput;
}
