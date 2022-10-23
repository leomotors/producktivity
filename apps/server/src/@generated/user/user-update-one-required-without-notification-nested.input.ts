import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutNotificationInput } from './user-create-without-notification.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutNotificationInput } from './user-create-or-connect-without-notification.input';
import { UserUpsertWithoutNotificationInput } from './user-upsert-without-notification.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutNotificationInput } from './user-update-without-notification.input';

@InputType()
export class UserUpdateOneRequiredWithoutNotificationNestedInput {

    @Field(() => UserCreateWithoutNotificationInput, {nullable:true})
    @Type(() => UserCreateWithoutNotificationInput)
    create?: UserCreateWithoutNotificationInput;

    @Field(() => UserCreateOrConnectWithoutNotificationInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutNotificationInput)
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput;

    @Field(() => UserUpsertWithoutNotificationInput, {nullable:true})
    @Type(() => UserUpsertWithoutNotificationInput)
    upsert?: UserUpsertWithoutNotificationInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutNotificationInput, {nullable:true})
    @Type(() => UserUpdateWithoutNotificationInput)
    update?: UserUpdateWithoutNotificationInput;
}
