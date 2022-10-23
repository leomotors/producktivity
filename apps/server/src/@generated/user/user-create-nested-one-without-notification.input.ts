import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutNotificationInput } from './user-create-without-notification.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutNotificationInput } from './user-create-or-connect-without-notification.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutNotificationInput {

    @Field(() => UserCreateWithoutNotificationInput, {nullable:true})
    @Type(() => UserCreateWithoutNotificationInput)
    create?: UserCreateWithoutNotificationInput;

    @Field(() => UserCreateOrConnectWithoutNotificationInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutNotificationInput)
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
