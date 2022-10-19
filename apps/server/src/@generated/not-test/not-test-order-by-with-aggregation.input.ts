import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NotTestCountOrderByAggregateInput } from './not-test-count-order-by-aggregate.input';
import { NotTestMaxOrderByAggregateInput } from './not-test-max-order-by-aggregate.input';
import { NotTestMinOrderByAggregateInput } from './not-test-min-order-by-aggregate.input';

@InputType()
export class NotTestOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => NotTestCountOrderByAggregateInput, {nullable:true})
    _count?: NotTestCountOrderByAggregateInput;

    @Field(() => NotTestMaxOrderByAggregateInput, {nullable:true})
    _max?: NotTestMaxOrderByAggregateInput;

    @Field(() => NotTestMinOrderByAggregateInput, {nullable:true})
    _min?: NotTestMinOrderByAggregateInput;
}
