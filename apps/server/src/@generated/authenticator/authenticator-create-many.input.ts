import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AuthenticatorCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

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
}
