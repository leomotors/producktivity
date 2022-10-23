import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilterDefinitionUpdateWithoutFilterInput } from './filter-definition-update-without-filter.input';
import { Type } from 'class-transformer';
import { FilterDefinitionCreateWithoutFilterInput } from './filter-definition-create-without-filter.input';

@InputType()
export class FilterDefinitionUpsertWithoutFilterInput {

    @Field(() => FilterDefinitionUpdateWithoutFilterInput, {nullable:false})
    @Type(() => FilterDefinitionUpdateWithoutFilterInput)
    update!: FilterDefinitionUpdateWithoutFilterInput;

    @Field(() => FilterDefinitionCreateWithoutFilterInput, {nullable:false})
    @Type(() => FilterDefinitionCreateWithoutFilterInput)
    create!: FilterDefinitionCreateWithoutFilterInput;
}
