import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitWhereInput } from './habit-where.input';
import { Type } from 'class-transformer';
import { HabitOrderByWithRelationInput } from './habit-order-by-with-relation.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HabitCountAggregateInput } from './habit-count-aggregate.input';
import { HabitAvgAggregateInput } from './habit-avg-aggregate.input';
import { HabitSumAggregateInput } from './habit-sum-aggregate.input';
import { HabitMinAggregateInput } from './habit-min-aggregate.input';
import { HabitMaxAggregateInput } from './habit-max-aggregate.input';

@ArgsType()
export class HabitAggregateArgs {

    @Field(() => HabitWhereInput, {nullable:true})
    @Type(() => HabitWhereInput)
    where?: HabitWhereInput;

    @Field(() => [HabitOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HabitOrderByWithRelationInput>;

    @Field(() => HabitWhereUniqueInput, {nullable:true})
    cursor?: HabitWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HabitCountAggregateInput, {nullable:true})
    _count?: HabitCountAggregateInput;

    @Field(() => HabitAvgAggregateInput, {nullable:true})
    _avg?: HabitAvgAggregateInput;

    @Field(() => HabitSumAggregateInput, {nullable:true})
    _sum?: HabitSumAggregateInput;

    @Field(() => HabitMinAggregateInput, {nullable:true})
    _min?: HabitMinAggregateInput;

    @Field(() => HabitMaxAggregateInput, {nullable:true})
    _max?: HabitMaxAggregateInput;
}
