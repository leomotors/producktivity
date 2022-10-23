import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Filter } from '../filter/filter.model';
import { FilterDefinitionCount } from './filter-definition-count.output';

@ObjectType()
export class FilterDefinition {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    label!: string;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => [Filter], {nullable:true})
    filter?: Array<Filter>;

    @Field(() => FilterDefinitionCount, {nullable:false})
    _count?: FilterDefinitionCount;
}
