import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NotificationCountAggregate } from './notification-count-aggregate.output';
import { NotificationMinAggregate } from './notification-min-aggregate.output';
import { NotificationMaxAggregate } from './notification-max-aggregate.output';

@ObjectType()
export class NotificationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:false})
    isVisited!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => NotificationCountAggregate, {nullable:true})
    _count?: NotificationCountAggregate;

    @Field(() => NotificationMinAggregate, {nullable:true})
    _min?: NotificationMinAggregate;

    @Field(() => NotificationMaxAggregate, {nullable:true})
    _max?: NotificationMaxAggregate;
}
