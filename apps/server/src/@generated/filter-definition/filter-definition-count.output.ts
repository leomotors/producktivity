import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FilterDefinitionCount {

    @Field(() => Int, {nullable:false})
    filter?: number;
}
