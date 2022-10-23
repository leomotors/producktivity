import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilterDefinitionWhereUniqueInput } from './filter-definition-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneFilterDefinitionArgs {

    @Field(() => FilterDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => FilterDefinitionWhereUniqueInput)
    where!: FilterDefinitionWhereUniqueInput;
}
