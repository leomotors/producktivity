import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitUpdateInput } from './habit-update.input';
import { Type } from 'class-transformer';
import { HabitWhereUniqueInput } from './habit-where-unique.input';

@ArgsType()
export class UpdateOneHabitArgs {

    @Field(() => HabitUpdateInput, {nullable:false})
    @Type(() => HabitUpdateInput)
    data!: HabitUpdateInput;

    @Field(() => HabitWhereUniqueInput, {nullable:false})
    @Type(() => HabitWhereUniqueInput)
    where!: HabitWhereUniqueInput;
}
