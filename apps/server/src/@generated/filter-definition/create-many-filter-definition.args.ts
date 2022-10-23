import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilterDefinitionCreateManyInput } from './filter-definition-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFilterDefinitionArgs {

    @Field(() => [FilterDefinitionCreateManyInput], {nullable:false})
    @Type(() => FilterDefinitionCreateManyInput)
    data!: Array<FilterDefinitionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
