import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateManyUserInput } from './notification-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class NotificationCreateManyUserInputEnvelope {

    @Field(() => [NotificationCreateManyUserInput], {nullable:false})
    @Type(() => NotificationCreateManyUserInput)
    data!: Array<NotificationCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
