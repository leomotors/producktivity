import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilterDefinitionWhereInput } from './filter-definition-where.input';

@InputType()
export class FilterDefinitionRelationFilter {

    @Field(() => FilterDefinitionWhereInput, {nullable:true})
    is?: FilterDefinitionWhereInput;

    @Field(() => FilterDefinitionWhereInput, {nullable:true})
    isNot?: FilterDefinitionWhereInput;
}
