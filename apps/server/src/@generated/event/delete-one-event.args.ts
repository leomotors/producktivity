import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneEventArgs {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: EventWhereUniqueInput;
}
