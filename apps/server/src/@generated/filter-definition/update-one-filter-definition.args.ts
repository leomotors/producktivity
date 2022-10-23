import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilterDefinitionUpdateInput } from './filter-definition-update.input';
import { Type } from 'class-transformer';
import { FilterDefinitionWhereUniqueInput } from './filter-definition-where-unique.input';

@ArgsType()
export class UpdateOneFilterDefinitionArgs {

    @Field(() => FilterDefinitionUpdateInput, {nullable:false})
    @Type(() => FilterDefinitionUpdateInput)
    data!: FilterDefinitionUpdateInput;

    @Field(() => FilterDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => FilterDefinitionWhereUniqueInput)
    where!: FilterDefinitionWhereUniqueInput;
}
