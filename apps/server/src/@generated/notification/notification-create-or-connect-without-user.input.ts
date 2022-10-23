import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationCreateWithoutUserInput } from './notification-create-without-user.input';

@InputType()
export class NotificationCreateOrConnectWithoutUserInput {

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    @Type(() => NotificationWhereUniqueInput)
    where!: NotificationWhereUniqueInput;

    @Field(() => NotificationCreateWithoutUserInput, {nullable:false})
    @Type(() => NotificationCreateWithoutUserInput)
    create!: NotificationCreateWithoutUserInput;
}
