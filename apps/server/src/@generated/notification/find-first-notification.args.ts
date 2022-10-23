import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationWhereInput } from './notification-where.input';
import { Type } from 'class-transformer';
import { NotificationOrderByWithRelationInput } from './notification-order-by-with-relation.input';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NotificationScalarFieldEnum } from './notification-scalar-field.enum';

@ArgsType()
export class FindFirstNotificationArgs {

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

    @Field(() => [NotificationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NotificationScalarFieldEnum>;
}
