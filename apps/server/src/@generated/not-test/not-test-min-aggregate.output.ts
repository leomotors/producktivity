import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NotTestMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;
}
