import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { AuthenticatorListRelationFilter } from '../authenticator/authenticator-list-relation-filter.input';
import { ChallengeRelationFilter } from '../challenge/challenge-relation-filter.input';
import { TaskListRelationFilter } from '../task/task-list-relation-filter.input';
import { EventListRelationFilter } from '../event/event-list-relation-filter.input';
import { HabitListRelationFilter } from '../habit/habit-list-relation-filter.input';
import { NotificationListRelationFilter } from '../notification/notification-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    registered?: BoolFilter;

    @Field(() => AuthenticatorListRelationFilter, {nullable:true})
    authenticators?: AuthenticatorListRelationFilter;

    @Field(() => ChallengeRelationFilter, {nullable:true})
    challenge?: ChallengeRelationFilter;

    @Field(() => TaskListRelationFilter, {nullable:true})
    tasks?: TaskListRelationFilter;

    @Field(() => EventListRelationFilter, {nullable:true})
    events?: EventListRelationFilter;

    @Field(() => HabitListRelationFilter, {nullable:true})
    habits?: HabitListRelationFilter;

    @Field(() => NotificationListRelationFilter, {nullable:true})
    notifications?: NotificationListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
