import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HabitCountAggregate } from './habit-count-aggregate.output';
import { HabitAvgAggregate } from './habit-avg-aggregate.output';
import { HabitSumAggregate } from './habit-sum-aggregate.output';
import { HabitMinAggregate } from './habit-min-aggregate.output';
import { HabitMaxAggregate } from './habit-max-aggregate.output';

@ObjectType()
export class AggregateHabit {

    @Field(() => HabitCountAggregate, {nullable:true})
    _count?: HabitCountAggregate;

    @Field(() => HabitAvgAggregate, {nullable:true})
    _avg?: HabitAvgAggregate;

    @Field(() => HabitSumAggregate, {nullable:true})
    _sum?: HabitSumAggregate;

    @Field(() => HabitMinAggregate, {nullable:true})
    _min?: HabitMinAggregate;

    @Field(() => HabitMaxAggregate, {nullable:true})
    _max?: HabitMaxAggregate;
}
