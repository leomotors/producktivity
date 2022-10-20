import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AuthenticatorSumAggregate {

    @Field(() => Int, {nullable:true})
    counter?: number;
}
