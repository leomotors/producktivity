import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { Type } from 'class-transformer';
import { HabitCreateInput } from './habit-create.input';
import { HabitUpdateInput } from './habit-update.input';

@ArgsType()
export class UpsertOneHabitArgs {

    @Field(() => HabitWhereUniqueInput, {nullable:false})
    @Type(() => HabitWhereUniqueInput)
    where!: HabitWhereUniqueInput;

    @Field(() => HabitCreateInput, {nullable:false})
    @Type(() => HabitCreateInput)
    create!: HabitCreateInput;

    @Field(() => HabitUpdateInput, {nullable:false})
    @Type(() => HabitUpdateInput)
    update!: HabitUpdateInput;
}
