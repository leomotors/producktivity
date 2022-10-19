import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class AuthenticatorAvgAggregate {

    @Field(() => Float, {nullable:true})
    counter?: number;
}
