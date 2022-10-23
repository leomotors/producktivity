import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitWhereInput } from './habit-where.input';

@InputType()
export class HabitRelationFilter {

    @Field(() => HabitWhereInput, {nullable:true})
    is?: HabitWhereInput;

    @Field(() => HabitWhereInput, {nullable:true})
    isNot?: HabitWhereInput;
}
