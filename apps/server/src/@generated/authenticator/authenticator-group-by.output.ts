import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AuthenticatorCountAggregate } from './authenticator-count-aggregate.output';
import { AuthenticatorAvgAggregate } from './authenticator-avg-aggregate.output';
import { AuthenticatorSumAggregate } from './authenticator-sum-aggregate.output';
import { AuthenticatorMinAggregate } from './authenticator-min-aggregate.output';
import { AuthenticatorMaxAggregate } from './authenticator-max-aggregate.output';

@ObjectType()
export class AuthenticatorGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:false})
    fmt!: string;

    @Field(() => String, {nullable:false})
    publicKey!: string;

    @Field(() => Int, {nullable:false})
    counter!: number;

    @Field(() => String, {nullable:false})
    credentialId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => AuthenticatorCountAggregate, {nullable:true})
    _count?: AuthenticatorCountAggregate;

    @Field(() => AuthenticatorAvgAggregate, {nullable:true})
    _avg?: AuthenticatorAvgAggregate;

    @Field(() => AuthenticatorSumAggregate, {nullable:true})
    _sum?: AuthenticatorSumAggregate;

    @Field(() => AuthenticatorMinAggregate, {nullable:true})
    _min?: AuthenticatorMinAggregate;

    @Field(() => AuthenticatorMaxAggregate, {nullable:true})
    _max?: AuthenticatorMaxAggregate;
}
