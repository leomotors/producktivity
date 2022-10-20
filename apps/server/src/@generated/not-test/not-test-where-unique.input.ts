import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NotTestWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
