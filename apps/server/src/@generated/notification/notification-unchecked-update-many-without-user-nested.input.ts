import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateWithoutUserInput } from './notification-create-without-user.input';
import { Type } from 'class-transformer';
import { NotificationCreateOrConnectWithoutUserInput } from './notification-create-or-connect-without-user.input';
import { NotificationUpsertWithWhereUniqueWithoutUserInput } from './notification-upsert-with-where-unique-without-user.input';
import { NotificationCreateManyUserInputEnvelope } from './notification-create-many-user-input-envelope.input';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { NotificationUpdateWithWhereUniqueWithoutUserInput } from './notification-update-with-where-unique-without-user.input';
import { NotificationUpdateManyWithWhereWithoutUserInput } from './notification-update-many-with-where-without-user.input';
import { NotificationScalarWhereInput } from './notification-scalar-where.input';

@InputType()
export class NotificationUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [NotificationCreateWithoutUserInput], {nullable:true})
    @Type(() => NotificationCreateWithoutUserInput)
    create?: Array<NotificationCreateWithoutUserInput>;

    @Field(() => [NotificationCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => NotificationCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<NotificationCreateOrConnectWithoutUserInput>;

    @Field(() => [NotificationUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => NotificationUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<NotificationUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => NotificationCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => NotificationCreateManyUserInputEnvelope)
    createMany?: NotificationCreateManyUserInputEnvelope;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    set?: Array<NotificationWhereUniqueInput>;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    disconnect?: Array<NotificationWhereUniqueInput>;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    delete?: Array<NotificationWhereUniqueInput>;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    connect?: Array<NotificationWhereUniqueInput>;

    @Field(() => [NotificationUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => NotificationUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<NotificationUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [NotificationUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => NotificationUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<NotificationUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [NotificationScalarWhereInput], {nullable:true})
    @Type(() => NotificationScalarWhereInput)
    deleteMany?: Array<NotificationScalarWhereInput>;
}
