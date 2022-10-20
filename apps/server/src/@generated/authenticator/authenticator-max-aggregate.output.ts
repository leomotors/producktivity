import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AuthenticatorMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    fmt?: string;

    @Field(() => String, {nullable:true})
    publicKey?: string;

    @Field(() => Int, {nullable:true})
    counter?: number;

    @Field(() => String, {nullable:true})
    credentialId?: string;

    @Field(() => String, {nullable:true})
    userId?: string;
}
