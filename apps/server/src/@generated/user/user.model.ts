import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Authenticator } from '../authenticator/authenticator.model';
import { Challenge } from '../challenge/challenge.model';
import { Task } from '../task/task.model';
import { Event } from '../event/event.model';
import { Habit } from '../habit/habit.model';
import { Notification } from '../notification/notification.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    registered!: boolean;

    @Field(() => [Authenticator], {nullable:true})
    authenticators?: Array<Authenticator>;

    @Field(() => Challenge, {nullable:true})
    challenge?: Challenge | null;

    @Field(() => [Task], {nullable:true})
    tasks?: Array<Task>;

    @Field(() => [Event], {nullable:true})
    events?: Array<Event>;

    @Field(() => [Habit], {nullable:true})
    habits?: Array<Habit>;

    @Field(() => [Notification], {nullable:true})
    notifications?: Array<Notification>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
