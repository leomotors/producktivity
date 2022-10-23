import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilterCreateManyFilterDefinitionInput } from './filter-create-many-filter-definition.input';
import { Type } from 'class-transformer';

@InputType()
export class FilterCreateManyFilterDefinitionInputEnvelope {

    @Field(() => [FilterCreateManyFilterDefinitionInput], {nullable:false})
    @Type(() => FilterCreateManyFilterDefinitionInput)
    data!: Array<FilterCreateManyFilterDefinitionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
