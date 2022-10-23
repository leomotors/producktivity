import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FilterOrderByRelationAggregateInput } from '../filter/filter-order-by-relation-aggregate.input';

@InputType()
export class FilterDefinitionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    label?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => FilterOrderByRelationAggregateInput, {nullable:true})
    filter?: FilterOrderByRelationAggregateInput;
}
