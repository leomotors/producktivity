import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NotTestMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;
}
