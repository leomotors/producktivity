import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventScalarWhereInput } from './event-scalar-where.input';
import { Type } from 'class-transformer';
import { EventUpdateManyMutationInput } from './event-update-many-mutation.input';

@InputType()
export class EventUpdateManyWithWhereWithoutUserInput {

    @Field(() => EventScalarWhereInput, {nullable:false})
    @Type(() => EventScalarWhereInput)
    where!: EventScalarWhereInput;

    @Field(() => EventUpdateManyMutationInput, {nullable:false})
    @Type(() => EventUpdateManyMutationInput)
    data!: EventUpdateManyMutationInput;
}
