import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutUserInput } from './event-create-without-user.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutUserInput } from './event-create-or-connect-without-user.input';
import { EventUpsertWithWhereUniqueWithoutUserInput } from './event-upsert-with-where-unique-without-user.input';
import { EventCreateManyUserInputEnvelope } from './event-create-many-user-input-envelope.input';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateWithWhereUniqueWithoutUserInput } from './event-update-with-where-unique-without-user.input';
import { EventUpdateManyWithWhereWithoutUserInput } from './event-update-many-with-where-without-user.input';
import { EventScalarWhereInput } from './event-scalar-where.input';

@InputType()
export class EventUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [EventCreateWithoutUserInput], {nullable:true})
    @Type(() => EventCreateWithoutUserInput)
    create?: Array<EventCreateWithoutUserInput>;

    @Field(() => [EventCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => EventCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<EventCreateOrConnectWithoutUserInput>;

    @Field(() => [EventUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => EventUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<EventUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => EventCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => EventCreateManyUserInputEnvelope)
    createMany?: EventCreateManyUserInputEnvelope;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    set?: Array<EventWhereUniqueInput>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    disconnect?: Array<EventWhereUniqueInput>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    delete?: Array<EventWhereUniqueInput>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Array<EventWhereUniqueInput>;

    @Field(() => [EventUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => EventUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<EventUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [EventUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => EventUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<EventUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [EventScalarWhereInput], {nullable:true})
    @Type(() => EventScalarWhereInput)
    deleteMany?: Array<EventScalarWhereInput>;
}
