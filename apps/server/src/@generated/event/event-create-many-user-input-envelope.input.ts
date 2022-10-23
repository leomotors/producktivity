import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateManyUserInput } from './event-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class EventCreateManyUserInputEnvelope {

    @Field(() => [EventCreateManyUserInput], {nullable:false})
    @Type(() => EventCreateManyUserInput)
    data!: Array<EventCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
