import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AuthenticatorSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    counter?: true;
}
