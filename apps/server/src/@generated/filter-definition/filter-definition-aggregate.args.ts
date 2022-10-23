import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilterDefinitionWhereInput } from './filter-definition-where.input';
import { Type } from 'class-transformer';
import { FilterDefinitionOrderByWithRelationInput } from './filter-definition-order-by-with-relation.input';
import { FilterDefinitionWhereUniqueInput } from './filter-definition-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FilterDefinitionCountAggregateInput } from './filter-definition-count-aggregate.input';
import { FilterDefinitionAvgAggregateInput } from './filter-definition-avg-aggregate.input';
import { FilterDefinitionSumAggregateInput } from './filter-definition-sum-aggregate.input';
import { FilterDefinitionMinAggregateInput } from './filter-definition-min-aggregate.input';
import { FilterDefinitionMaxAggregateInput } from './filter-definition-max-aggregate.input';

@ArgsType()
export class FilterDefinitionAggregateArgs {

    @Field(() => FilterDefinitionWhereInput, {nullable:true})
    @Type(() => FilterDefinitionWhereInput)
    where?: FilterDefinitionWhereInput;

    @Field(() => [FilterDefinitionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FilterDefinitionOrderByWithRelationInput>;

    @Field(() => FilterDefinitionWhereUniqueInput, {nullable:true})
    cursor?: FilterDefinitionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FilterDefinitionCountAggregateInput, {nullable:true})
    _count?: FilterDefinitionCountAggregateInput;

    @Field(() => FilterDefinitionAvgAggregateInput, {nullable:true})
    _avg?: FilterDefinitionAvgAggregateInput;

    @Field(() => FilterDefinitionSumAggregateInput, {nullable:true})
    _sum?: FilterDefinitionSumAggregateInput;

    @Field(() => FilterDefinitionMinAggregateInput, {nullable:true})
    _min?: FilterDefinitionMinAggregateInput;

    @Field(() => FilterDefinitionMaxAggregateInput, {nullable:true})
    _max?: FilterDefinitionMaxAggregateInput;
}
