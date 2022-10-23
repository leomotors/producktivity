import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilterDefinitionWhereInput } from './filter-definition-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFilterDefinitionArgs {

    @Field(() => FilterDefinitionWhereInput, {nullable:true})
    @Type(() => FilterDefinitionWhereInput)
    where?: FilterDefinitionWhereInput;
}
