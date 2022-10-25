import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class EventAvgAggregate {

    @Field(() => Float, {nullable:true})
    currentCount?: number;

    @Field(() => Float, {nullable:true})
    requireCount?: number;
}
