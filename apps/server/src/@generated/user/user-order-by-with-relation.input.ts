import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AuthenticatorOrderByRelationAggregateInput } from '../authenticator/authenticator-order-by-relation-aggregate.input';
import { ChallengeOrderByWithRelationInput } from '../challenge/challenge-order-by-with-relation.input';
import { TaskOrderByRelationAggregateInput } from '../task/task-order-by-relation-aggregate.input';
import { EventOrderByRelationAggregateInput } from '../event/event-order-by-relation-aggregate.input';
import { HabitOrderByRelationAggregateInput } from '../habit/habit-order-by-relation-aggregate.input';
import { NotificationOrderByRelationAggregateInput } from '../notification/notification-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    registered?: keyof typeof SortOrder;

    @Field(() => AuthenticatorOrderByRelationAggregateInput, {nullable:true})
    authenticators?: AuthenticatorOrderByRelationAggregateInput;

    @Field(() => ChallengeOrderByWithRelationInput, {nullable:true})
    challenge?: ChallengeOrderByWithRelationInput;

    @Field(() => TaskOrderByRelationAggregateInput, {nullable:true})
    tasks?: TaskOrderByRelationAggregateInput;

    @Field(() => EventOrderByRelationAggregateInput, {nullable:true})
    events?: EventOrderByRelationAggregateInput;

    @Field(() => HabitOrderByRelationAggregateInput, {nullable:true})
    habits?: HabitOrderByRelationAggregateInput;

    @Field(() => NotificationOrderByRelationAggregateInput, {nullable:true})
    notifications?: NotificationOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
