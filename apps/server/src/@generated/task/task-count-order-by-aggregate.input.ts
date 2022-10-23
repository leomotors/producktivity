import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TaskCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    due_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isCompleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    caseId?: keyof typeof SortOrder;
}
