import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { TaskOrderByWithRelationInput } from '../task/task-order-by-with-relation.input';
import { EventOrderByWithRelationInput } from '../event/event-order-by-with-relation.input';
import { HabitOrderByWithRelationInput } from '../habit/habit-order-by-with-relation.input';
import { FilterOrderByRelationAggregateInput } from '../filter/filter-order-by-relation-aggregate.input';

@InputType()
export class CaseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => TaskOrderByWithRelationInput, {nullable:true})
    task?: TaskOrderByWithRelationInput;

    @Field(() => EventOrderByWithRelationInput, {nullable:true})
    event?: EventOrderByWithRelationInput;

    @Field(() => HabitOrderByWithRelationInput, {nullable:true})
    habit?: HabitOrderByWithRelationInput;

    @Field(() => FilterOrderByRelationAggregateInput, {nullable:true})
    filter?: FilterOrderByRelationAggregateInput;
}
