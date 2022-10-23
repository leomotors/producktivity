import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutNotificationsInput } from './user-create-without-notifications.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutNotificationsInput } from './user-create-or-connect-without-notifications.input';
import { UserUpsertWithoutNotificationsInput } from './user-upsert-without-notifications.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutNotificationsInput } from './user-update-without-notifications.input';

@InputType()
export class UserUpdateOneRequiredWithoutNotificationsNestedInput {

    @Field(() => UserCreateWithoutNotificationsInput, {nullable:true})
    @Type(() => UserCreateWithoutNotificationsInput)
    create?: UserCreateWithoutNotificationsInput;

    @Field(() => UserCreateOrConnectWithoutNotificationsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutNotificationsInput)
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput;

    @Field(() => UserUpsertWithoutNotificationsInput, {nullable:true})
    @Type(() => UserUpsertWithoutNotificationsInput)
    upsert?: UserUpsertWithoutNotificationsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutNotificationsInput, {nullable:true})
    @Type(() => UserUpdateWithoutNotificationsInput)
    update?: UserUpdateWithoutNotificationsInput;
}
