import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { TaskRelationFilter } from '../task/task-relation-filter.input';
import { EventRelationFilter } from '../event/event-relation-filter.input';
import { HabitRelationFilter } from '../habit/habit-relation-filter.input';
import { FilterListRelationFilter } from '../filter/filter-list-relation-filter.input';

@InputType()
export class CaseWhereInput {

    @Field(() => [CaseWhereInput], {nullable:true})
    AND?: Array<CaseWhereInput>;

    @Field(() => [CaseWhereInput], {nullable:true})
    OR?: Array<CaseWhereInput>;

    @Field(() => [CaseWhereInput], {nullable:true})
    NOT?: Array<CaseWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updateAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => TaskRelationFilter, {nullable:true})
    task?: TaskRelationFilter;

    @Field(() => EventRelationFilter, {nullable:true})
    event?: EventRelationFilter;

    @Field(() => HabitRelationFilter, {nullable:true})
    habit?: HabitRelationFilter;

    @Field(() => FilterListRelationFilter, {nullable:true})
    filter?: FilterListRelationFilter;
}
