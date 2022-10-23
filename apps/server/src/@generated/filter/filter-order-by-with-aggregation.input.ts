import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FilterCountOrderByAggregateInput } from './filter-count-order-by-aggregate.input';
import { FilterMaxOrderByAggregateInput } from './filter-max-order-by-aggregate.input';
import { FilterMinOrderByAggregateInput } from './filter-min-order-by-aggregate.input';

@InputType()
export class FilterOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    caseId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    filterDefinitionId?: keyof typeof SortOrder;

    @Field(() => FilterCountOrderByAggregateInput, {nullable:true})
    _count?: FilterCountOrderByAggregateInput;

    @Field(() => FilterMaxOrderByAggregateInput, {nullable:true})
    _max?: FilterMaxOrderByAggregateInput;

    @Field(() => FilterMinOrderByAggregateInput, {nullable:true})
    _min?: FilterMinOrderByAggregateInput;
}
