import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FilterCountAggregate } from './filter-count-aggregate.output';
import { FilterMinAggregate } from './filter-min-aggregate.output';
import { FilterMaxAggregate } from './filter-max-aggregate.output';

@ObjectType()
export class FilterGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:false})
    caseId!: string;

    @Field(() => String, {nullable:false})
    filterDefinitionId!: string;

    @Field(() => FilterCountAggregate, {nullable:true})
    _count?: FilterCountAggregate;

    @Field(() => FilterMinAggregate, {nullable:true})
    _min?: FilterMinAggregate;

    @Field(() => FilterMaxAggregate, {nullable:true})
    _max?: FilterMaxAggregate;
}
