import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AuthenticatorAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    counter?: true;
}
