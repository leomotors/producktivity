import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FilterDefinitionCountAggregate } from './filter-definition-count-aggregate.output';
import { FilterDefinitionAvgAggregate } from './filter-definition-avg-aggregate.output';
import { FilterDefinitionSumAggregate } from './filter-definition-sum-aggregate.output';
import { FilterDefinitionMinAggregate } from './filter-definition-min-aggregate.output';
import { FilterDefinitionMaxAggregate } from './filter-definition-max-aggregate.output';

@ObjectType()
export class AggregateFilterDefinition {

    @Field(() => FilterDefinitionCountAggregate, {nullable:true})
    _count?: FilterDefinitionCountAggregate;

    @Field(() => FilterDefinitionAvgAggregate, {nullable:true})
    _avg?: FilterDefinitionAvgAggregate;

    @Field(() => FilterDefinitionSumAggregate, {nullable:true})
    _sum?: FilterDefinitionSumAggregate;

    @Field(() => FilterDefinitionMinAggregate, {nullable:true})
    _min?: FilterDefinitionMinAggregate;

    @Field(() => FilterDefinitionMaxAggregate, {nullable:true})
    _max?: FilterDefinitionMaxAggregate;
}
