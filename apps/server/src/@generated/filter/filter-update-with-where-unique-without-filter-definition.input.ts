import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilterWhereUniqueInput } from './filter-where-unique.input';
import { Type } from 'class-transformer';
import { FilterUpdateWithoutFilterDefinitionInput } from './filter-update-without-filter-definition.input';

@InputType()
export class FilterUpdateWithWhereUniqueWithoutFilterDefinitionInput {

    @Field(() => FilterWhereUniqueInput, {nullable:false})
    @Type(() => FilterWhereUniqueInput)
    where!: FilterWhereUniqueInput;

    @Field(() => FilterUpdateWithoutFilterDefinitionInput, {nullable:false})
    @Type(() => FilterUpdateWithoutFilterDefinitionInput)
    data!: FilterUpdateWithoutFilterDefinitionInput;
}
