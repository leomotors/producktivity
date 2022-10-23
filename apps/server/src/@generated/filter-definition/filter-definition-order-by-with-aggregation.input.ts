import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FilterDefinitionCountOrderByAggregateInput } from './filter-definition-count-order-by-aggregate.input';
import { FilterDefinitionAvgOrderByAggregateInput } from './filter-definition-avg-order-by-aggregate.input';
import { FilterDefinitionMaxOrderByAggregateInput } from './filter-definition-max-order-by-aggregate.input';
import { FilterDefinitionMinOrderByAggregateInput } from './filter-definition-min-order-by-aggregate.input';
import { FilterDefinitionSumOrderByAggregateInput } from './filter-definition-sum-order-by-aggregate.input';

@InputType()
export class FilterDefinitionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    label?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => FilterDefinitionCountOrderByAggregateInput, {nullable:true})
    _count?: FilterDefinitionCountOrderByAggregateInput;

    @Field(() => FilterDefinitionAvgOrderByAggregateInput, {nullable:true})
    _avg?: FilterDefinitionAvgOrderByAggregateInput;

    @Field(() => FilterDefinitionMaxOrderByAggregateInput, {nullable:true})
    _max?: FilterDefinitionMaxOrderByAggregateInput;

    @Field(() => FilterDefinitionMinOrderByAggregateInput, {nullable:true})
    _min?: FilterDefinitionMinOrderByAggregateInput;

    @Field(() => FilterDefinitionSumOrderByAggregateInput, {nullable:true})
    _sum?: FilterDefinitionSumOrderByAggregateInput;
}
