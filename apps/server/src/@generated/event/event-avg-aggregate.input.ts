import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EventAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    currentCount?: true;

    @Field(() => Boolean, {nullable:true})
    requireCount?: true;
}
