import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NotTestMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
