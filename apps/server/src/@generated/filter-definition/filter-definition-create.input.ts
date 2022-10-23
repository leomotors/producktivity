import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FilterCreateNestedManyWithoutFilterDefinitionInput } from '../filter/filter-create-nested-many-without-filter-definition.input';

@InputType()
export class FilterDefinitionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    label!: string;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => FilterCreateNestedManyWithoutFilterDefinitionInput, {nullable:true})
    filter?: FilterCreateNestedManyWithoutFilterDefinitionInput;
}
