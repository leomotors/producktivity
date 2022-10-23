import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitWhereInput } from './habit-where.input';

@InputType()
export class HabitListRelationFilter {

    @Field(() => HabitWhereInput, {nullable:true})
    every?: HabitWhereInput;

    @Field(() => HabitWhereInput, {nullable:true})
    some?: HabitWhereInput;

    @Field(() => HabitWhereInput, {nullable:true})
    none?: HabitWhereInput;
}
