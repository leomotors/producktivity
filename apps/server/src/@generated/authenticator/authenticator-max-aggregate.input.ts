import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AuthenticatorMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    fmt?: true;

    @Field(() => Boolean, {nullable:true})
    publicKey?: true;

    @Field(() => Boolean, {nullable:true})
    counter?: true;

    @Field(() => Boolean, {nullable:true})
    credentialId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;
}
