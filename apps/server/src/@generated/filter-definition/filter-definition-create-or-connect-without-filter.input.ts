import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilterDefinitionWhereUniqueInput } from './filter-definition-where-unique.input';
import { Type } from 'class-transformer';
import { FilterDefinitionCreateWithoutFilterInput } from './filter-definition-create-without-filter.input';

@InputType()
export class FilterDefinitionCreateOrConnectWithoutFilterInput {

    @Field(() => FilterDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => FilterDefinitionWhereUniqueInput)
    where!: FilterDefinitionWhereUniqueInput;

    @Field(() => FilterDefinitionCreateWithoutFilterInput, {nullable:false})
    @Type(() => FilterDefinitionCreateWithoutFilterInput)
    create!: FilterDefinitionCreateWithoutFilterInput;
}
