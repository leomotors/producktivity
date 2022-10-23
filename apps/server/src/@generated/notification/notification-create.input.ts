import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutNotificationInput } from '../user/user-create-nested-one-without-notification.input';

@InputType()
export class NotificationCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    isVisited?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:false})
    updateAt!: Date | string;

    @Field(() => UserCreateNestedOneWithoutNotificationInput, {nullable:false})
    User!: UserCreateNestedOneWithoutNotificationInput;
}
