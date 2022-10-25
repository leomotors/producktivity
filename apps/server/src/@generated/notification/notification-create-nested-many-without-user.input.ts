import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateWithoutUserInput } from './notification-create-without-user.input';
import { Type } from 'class-transformer';
import { NotificationCreateOrConnectWithoutUserInput } from './notification-create-or-connect-without-user.input';
import { NotificationCreateManyUserInputEnvelope } from './notification-create-many-user-input-envelope.input';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';

@InputType()
export class NotificationCreateNestedManyWithoutUserInput {

    @Field(() => [NotificationCreateWithoutUserInput], {nullable:true})
    @Type(() => NotificationCreateWithoutUserInput)
    create?: Array<NotificationCreateWithoutUserInput>;

    @Field(() => [NotificationCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => NotificationCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<NotificationCreateOrConnectWithoutUserInput>;

    @Field(() => NotificationCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => NotificationCreateManyUserInputEnvelope)
    createMany?: NotificationCreateManyUserInputEnvelope;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    connect?: Array<NotificationWhereUniqueInput>;
}
