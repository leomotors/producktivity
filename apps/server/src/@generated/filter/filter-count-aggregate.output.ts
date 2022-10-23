import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FilterCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    caseId!: number;

    @Field(() => Int, {nullable:false})
    filterDefinitionId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
