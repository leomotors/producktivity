import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutUserInput } from './event-create-without-user.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutUserInput } from './event-create-or-connect-without-user.input';
import { EventCreateManyUserInputEnvelope } from './event-create-many-user-input-envelope.input';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [EventCreateWithoutUserInput], {nullable:true})
    @Type(() => EventCreateWithoutUserInput)
    create?: Array<EventCreateWithoutUserInput>;

    @Field(() => [EventCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => EventCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<EventCreateOrConnectWithoutUserInput>;

    @Field(() => EventCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => EventCreateManyUserInputEnvelope)
    createMany?: EventCreateManyUserInputEnvelope;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Array<EventWhereUniqueInput>;
}
