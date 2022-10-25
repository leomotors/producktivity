import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class EventAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    currentCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    requireCount?: keyof typeof SortOrder;
}
