import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilterDefinitionCreateInput } from './filter-definition-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFilterDefinitionArgs {

    @Field(() => FilterDefinitionCreateInput, {nullable:false})
    @Type(() => FilterDefinitionCreateInput)
    data!: FilterDefinitionCreateInput;
}
