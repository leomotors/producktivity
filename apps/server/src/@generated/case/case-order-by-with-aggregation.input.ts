import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CaseCountOrderByAggregateInput } from './case-count-order-by-aggregate.input';
import { CaseMaxOrderByAggregateInput } from './case-max-order-by-aggregate.input';
import { CaseMinOrderByAggregateInput } from './case-min-order-by-aggregate.input';

@InputType()
export class CaseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => CaseCountOrderByAggregateInput, {nullable:true})
    _count?: CaseCountOrderByAggregateInput;

    @Field(() => CaseMaxOrderByAggregateInput, {nullable:true})
    _max?: CaseMaxOrderByAggregateInput;

    @Field(() => CaseMinOrderByAggregateInput, {nullable:true})
    _min?: CaseMinOrderByAggregateInput;
}
