import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutNotificationsInput } from './user-create-without-notifications.input';

@InputType()
export class UserCreateOrConnectWithoutNotificationsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutNotificationsInput, {nullable:false})
    @Type(() => UserCreateWithoutNotificationsInput)
    create!: UserCreateWithoutNotificationsInput;
}
