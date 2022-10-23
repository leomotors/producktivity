import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HabitCountAggregate } from './habit-count-aggregate.output';
import { HabitMinAggregate } from './habit-min-aggregate.output';
import { HabitMaxAggregate } from './habit-max-aggregate.output';

@ObjectType()
export class HabitGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [String], {nullable:true})
    tags?: Array<string>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => HabitCountAggregate, {nullable:true})
    _count?: HabitCountAggregate;

    @Field(() => HabitMinAggregate, {nullable:true})
    _min?: HabitMinAggregate;

    @Field(() => HabitMaxAggregate, {nullable:true})
    _max?: HabitMaxAggregate;
}
