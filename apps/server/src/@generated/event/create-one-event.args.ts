import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventCreateInput } from './event-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEventArgs {

    @Field(() => EventCreateInput, {nullable:false})
    @Type(() => EventCreateInput)
    data!: EventCreateInput;
}
