import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FilterCountAggregate } from './filter-count-aggregate.output';
import { FilterMinAggregate } from './filter-min-aggregate.output';
import { FilterMaxAggregate } from './filter-max-aggregate.output';

@ObjectType()
export class AggregateFilter {

    @Field(() => FilterCountAggregate, {nullable:true})
    _count?: FilterCountAggregate;

    @Field(() => FilterMinAggregate, {nullable:true})
    _min?: FilterMinAggregate;

    @Field(() => FilterMaxAggregate, {nullable:true})
    _max?: FilterMaxAggregate;
}
