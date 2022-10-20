import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AuthenticatorCreateWithoutUserInput {

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
}
