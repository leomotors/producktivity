import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueHabitArgs {

    @Field(() => HabitWhereUniqueInput, {nullable:false})
    @Type(() => HabitWhereUniqueInput)
    where!: HabitWhereUniqueInput;
}
