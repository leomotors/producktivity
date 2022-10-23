import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutNotificationsInput } from './user-create-without-notifications.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutNotificationsInput } from './user-create-or-connect-without-notifications.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutNotificationsInput {

    @Field(() => UserCreateWithoutNotificationsInput, {nullable:true})
    @Type(() => UserCreateWithoutNotificationsInput)
    create?: UserCreateWithoutNotificationsInput;

    @Field(() => UserCreateOrConnectWithoutNotificationsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutNotificationsInput)
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
