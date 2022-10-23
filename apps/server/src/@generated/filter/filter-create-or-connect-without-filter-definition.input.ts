import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilterWhereUniqueInput } from './filter-where-unique.input';
import { Type } from 'class-transformer';
import { FilterCreateWithoutFilterDefinitionInput } from './filter-create-without-filter-definition.input';

@InputType()
export class FilterCreateOrConnectWithoutFilterDefinitionInput {

    @Field(() => FilterWhereUniqueInput, {nullable:false})
    @Type(() => FilterWhereUniqueInput)
    where!: FilterWhereUniqueInput;

    @Field(() => FilterCreateWithoutFilterDefinitionInput, {nullable:false})
    @Type(() => FilterCreateWithoutFilterDefinitionInput)
    create!: FilterCreateWithoutFilterDefinitionInput;
}
