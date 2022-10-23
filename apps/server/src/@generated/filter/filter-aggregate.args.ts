import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilterWhereInput } from './filter-where.input';
import { Type } from 'class-transformer';
import { FilterOrderByWithRelationInput } from './filter-order-by-with-relation.input';
import { FilterWhereUniqueInput } from './filter-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FilterCountAggregateInput } from './filter-count-aggregate.input';
import { FilterMinAggregateInput } from './filter-min-aggregate.input';
import { FilterMaxAggregateInput } from './filter-max-aggregate.input';

@ArgsType()
export class FilterAggregateArgs {

    @Field(() => FilterWhereInput, {nullable:true})
    @Type(() => FilterWhereInput)
    where?: FilterWhereInput;

    @Field(() => [FilterOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FilterOrderByWithRelationInput>;

    @Field(() => FilterWhereUniqueInput, {nullable:true})
    cursor?: FilterWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FilterCountAggregateInput, {nullable:true})
    _count?: FilterCountAggregateInput;

    @Field(() => FilterMinAggregateInput, {nullable:true})
    _min?: FilterMinAggregateInput;

    @Field(() => FilterMaxAggregateInput, {nullable:true})
    _max?: FilterMaxAggregateInput;
}
