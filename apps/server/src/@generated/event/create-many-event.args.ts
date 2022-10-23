import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventCreateManyInput } from './event-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyEventArgs {

    @Field(() => [EventCreateManyInput], {nullable:false})
    @Type(() => EventCreateManyInput)
    data!: Array<EventCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
