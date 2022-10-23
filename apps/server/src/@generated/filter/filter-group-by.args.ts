import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilterWhereInput } from './filter-where.input';
import { Type } from 'class-transformer';
import { FilterOrderByWithAggregationInput } from './filter-order-by-with-aggregation.input';
import { FilterScalarFieldEnum } from './filter-scalar-field.enum';
import { FilterScalarWhereWithAggregatesInput } from './filter-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FilterCountAggregateInput } from './filter-count-aggregate.input';
import { FilterMinAggregateInput } from './filter-min-aggregate.input';
import { FilterMaxAggregateInput } from './filter-max-aggregate.input';

@ArgsType()
export class FilterGroupByArgs {

    @Field(() => FilterWhereInput, {nullable:true})
    @Type(() => FilterWhereInput)
    where?: FilterWhereInput;

    @Field(() => [FilterOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FilterOrderByWithAggregationInput>;

    @Field(() => [FilterScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FilterScalarFieldEnum>;

    @Field(() => FilterScalarWhereWithAggregatesInput, {nullable:true})
    having?: FilterScalarWhereWithAggregatesInput;

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
