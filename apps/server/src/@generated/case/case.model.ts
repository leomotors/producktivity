import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Task } from '../task/task.model';
import { Event } from '../event/event.model';
import { Habit } from '../habit/habit.model';
import { Filter } from '../filter/filter.model';
import { CaseCount } from './case-count.output';

@ObjectType()
export class Case {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updateAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Task, {nullable:true})
    task?: Task | null;

    @Field(() => Event, {nullable:true})
    event?: Event | null;

    @Field(() => Habit, {nullable:true})
    habit?: Habit | null;

    @Field(() => [Filter], {nullable:true})
    filter?: Array<Filter>;

    @Field(() => CaseCount, {nullable:false})
    _count?: CaseCount;
}
