import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HabitCountOrderByAggregateInput } from './habit-count-order-by-aggregate.input';
import { HabitMaxOrderByAggregateInput } from './habit-max-order-by-aggregate.input';
import { HabitMinOrderByAggregateInput } from './habit-min-order-by-aggregate.input';

@InputType()
export class HabitOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    caseId?: keyof typeof SortOrder;

    @Field(() => HabitCountOrderByAggregateInput, {nullable:true})
    _count?: HabitCountOrderByAggregateInput;

    @Field(() => HabitMaxOrderByAggregateInput, {nullable:true})
    _max?: HabitMaxOrderByAggregateInput;

    @Field(() => HabitMinOrderByAggregateInput, {nullable:true})
    _min?: HabitMinOrderByAggregateInput;
}
