import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CaseCount {

    @Field(() => Int, {nullable:false})
    filter?: number;
}
