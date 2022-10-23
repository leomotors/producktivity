import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilterDefinitionUpdateManyMutationInput } from './filter-definition-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FilterDefinitionWhereInput } from './filter-definition-where.input';

@ArgsType()
export class UpdateManyFilterDefinitionArgs {

    @Field(() => FilterDefinitionUpdateManyMutationInput, {nullable:false})
    @Type(() => FilterDefinitionUpdateManyMutationInput)
    data!: FilterDefinitionUpdateManyMutationInput;

    @Field(() => FilterDefinitionWhereInput, {nullable:true})
    @Type(() => FilterDefinitionWhereInput)
    where?: FilterDefinitionWhereInput;
}
