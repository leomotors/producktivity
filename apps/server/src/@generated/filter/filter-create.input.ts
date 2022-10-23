import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseCreateNestedOneWithoutFilterInput } from '../case/case-create-nested-one-without-filter.input';
import { FilterDefinitionCreateNestedOneWithoutFilterInput } from '../filter-definition/filter-definition-create-nested-one-without-filter.input';

@InputType()
export class FilterCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => CaseCreateNestedOneWithoutFilterInput, {nullable:false})
    case!: CaseCreateNestedOneWithoutFilterInput;

    @Field(() => FilterDefinitionCreateNestedOneWithoutFilterInput, {nullable:false})
    FilterDefinition!: FilterDefinitionCreateNestedOneWithoutFilterInput;
}
