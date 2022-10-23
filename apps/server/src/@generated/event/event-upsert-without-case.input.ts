import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventUpdateWithoutCaseInput } from './event-update-without-case.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutCaseInput } from './event-create-without-case.input';

@InputType()
export class EventUpsertWithoutCaseInput {

    @Field(() => EventUpdateWithoutCaseInput, {nullable:false})
    @Type(() => EventUpdateWithoutCaseInput)
    update!: EventUpdateWithoutCaseInput;

    @Field(() => EventCreateWithoutCaseInput, {nullable:false})
    @Type(() => EventCreateWithoutCaseInput)
    create!: EventCreateWithoutCaseInput;
}
