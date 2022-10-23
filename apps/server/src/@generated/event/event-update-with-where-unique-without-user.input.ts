import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutUserInput } from './event-update-without-user.input';

@InputType()
export class EventUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: EventWhereUniqueInput;

    @Field(() => EventUpdateWithoutUserInput, {nullable:false})
    @Type(() => EventUpdateWithoutUserInput)
    data!: EventUpdateWithoutUserInput;
}
