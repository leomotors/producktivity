import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilterScalarWhereInput } from './filter-scalar-where.input';
import { Type } from 'class-transformer';
import { FilterUpdateManyMutationInput } from './filter-update-many-mutation.input';

@InputType()
export class FilterUpdateManyWithWhereWithoutFilterDefinitionInput {

    @Field(() => FilterScalarWhereInput, {nullable:false})
    @Type(() => FilterScalarWhereInput)
    where!: FilterScalarWhereInput;

    @Field(() => FilterUpdateManyMutationInput, {nullable:false})
    @Type(() => FilterUpdateManyMutationInput)
    data!: FilterUpdateManyMutationInput;
}
