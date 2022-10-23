import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilterDefinitionWhereUniqueInput } from './filter-definition-where-unique.input';
import { Type } from 'class-transformer';
import { FilterDefinitionCreateInput } from './filter-definition-create.input';
import { FilterDefinitionUpdateInput } from './filter-definition-update.input';

@ArgsType()
export class UpsertOneFilterDefinitionArgs {

    @Field(() => FilterDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => FilterDefinitionWhereUniqueInput)
    where!: FilterDefinitionWhereUniqueInput;

    @Field(() => FilterDefinitionCreateInput, {nullable:false})
    @Type(() => FilterDefinitionCreateInput)
    create!: FilterDefinitionCreateInput;

    @Field(() => FilterDefinitionUpdateInput, {nullable:false})
    @Type(() => FilterDefinitionUpdateInput)
    update!: FilterDefinitionUpdateInput;
}
