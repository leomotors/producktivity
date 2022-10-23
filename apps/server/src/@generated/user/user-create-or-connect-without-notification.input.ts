import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutNotificationInput } from './user-create-without-notification.input';

@InputType()
export class UserCreateOrConnectWithoutNotificationInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutNotificationInput, {nullable:false})
    @Type(() => UserCreateWithoutNotificationInput)
    create!: UserCreateWithoutNotificationInput;
}
