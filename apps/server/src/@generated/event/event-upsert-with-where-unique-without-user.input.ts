import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutUserInput } from './event-update-without-user.input';
import { EventCreateWithoutUserInput } from './event-create-without-user.input';

@InputType()
export class EventUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: EventWhereUniqueInput;

    @Field(() => EventUpdateWithoutUserInput, {nullable:false})
    @Type(() => EventUpdateWithoutUserInput)
    update!: EventUpdateWithoutUserInput;

    @Field(() => EventCreateWithoutUserInput, {nullable:false})
    @Type(() => EventCreateWithoutUserInput)
    create!: EventCreateWithoutUserInput;
}
