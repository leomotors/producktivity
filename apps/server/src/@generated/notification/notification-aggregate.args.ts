import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationWhereInput } from './notification-where.input';
import { Type } from 'class-transformer';
import { NotificationOrderByWithRelationInput } from './notification-order-by-with-relation.input';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NotificationCountAggregateInput } from './notification-count-aggregate.input';
import { NotificationMinAggregateInput } from './notification-min-aggregate.input';
import { NotificationMaxAggregateInput } from './notification-max-aggregate.input';

@ArgsType()
export class NotificationAggregateArgs {

    @Field(() => NotificationWhereInput, {nullable:true})
    @Type(() => NotificationWhereInput)
    where?: NotificationWhereInput;

    @Field(() => [NotificationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NotificationOrderByWithRelationInput>;

    @Field(() => NotificationWhereUniqueInput, {nullable:true})
    cursor?: NotificationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => NotificationCountAggregateInput, {nullable:true})
    _count?: NotificationCountAggregateInput;

    @Field(() => NotificationMinAggregateInput, {nullable:true})
    _min?: NotificationMinAggregateInput;

    @Field(() => NotificationMaxAggregateInput, {nullable:true})
    _max?: NotificationMaxAggregateInput;
}
