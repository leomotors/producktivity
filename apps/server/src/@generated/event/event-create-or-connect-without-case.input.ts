import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutCaseInput } from './event-create-without-case.input';

@InputType()
export class EventCreateOrConnectWithoutCaseInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: EventWhereUniqueInput;

    @Field(() => EventCreateWithoutCaseInput, {nullable:false})
    @Type(() => EventCreateWithoutCaseInput)
    create!: EventCreateWithoutCaseInput;
}
