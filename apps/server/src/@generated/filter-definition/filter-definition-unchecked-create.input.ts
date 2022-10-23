import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FilterUncheckedCreateNestedManyWithoutFilterDefinitionInput } from '../filter/filter-unchecked-create-nested-many-without-filter-definition.input';

@InputType()
export class FilterDefinitionUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    label!: string;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => FilterUncheckedCreateNestedManyWithoutFilterDefinitionInput, {nullable:true})
    filter?: FilterUncheckedCreateNestedManyWithoutFilterDefinitionInput;
}
