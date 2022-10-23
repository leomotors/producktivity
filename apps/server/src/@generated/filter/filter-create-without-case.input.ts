import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilterDefinitionCreateNestedOneWithoutFilterInput } from '../filter-definition/filter-definition-create-nested-one-without-filter.input';

@InputType()
export class FilterCreateWithoutCaseInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => FilterDefinitionCreateNestedOneWithoutFilterInput, {nullable:false})
    FilterDefinition!: FilterDefinitionCreateNestedOneWithoutFilterInput;
}
