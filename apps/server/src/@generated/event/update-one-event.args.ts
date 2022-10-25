import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventUpdateInput } from './event-update.input';
import { Type } from 'class-transformer';
import { EventWhereUniqueInput } from './event-where-unique.input';

@ArgsType()
export class UpdateOneEventArgs {

    @Field(() => EventUpdateInput, {nullable:false})
    @Type(() => EventUpdateInput)
    data!: EventUpdateInput;

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: EventWhereUniqueInput;
}
