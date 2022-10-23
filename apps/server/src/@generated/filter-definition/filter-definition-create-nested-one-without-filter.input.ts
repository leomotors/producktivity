import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilterDefinitionCreateWithoutFilterInput } from './filter-definition-create-without-filter.input';
import { Type } from 'class-transformer';
import { FilterDefinitionCreateOrConnectWithoutFilterInput } from './filter-definition-create-or-connect-without-filter.input';
import { FilterDefinitionWhereUniqueInput } from './filter-definition-where-unique.input';

@InputType()
export class FilterDefinitionCreateNestedOneWithoutFilterInput {

    @Field(() => FilterDefinitionCreateWithoutFilterInput, {nullable:true})
    @Type(() => FilterDefinitionCreateWithoutFilterInput)
    create?: FilterDefinitionCreateWithoutFilterInput;

    @Field(() => FilterDefinitionCreateOrConnectWithoutFilterInput, {nullable:true})
    @Type(() => FilterDefinitionCreateOrConnectWithoutFilterInput)
    connectOrCreate?: FilterDefinitionCreateOrConnectWithoutFilterInput;

    @Field(() => FilterDefinitionWhereUniqueInput, {nullable:true})
    @Type(() => FilterDefinitionWhereUniqueInput)
    connect?: FilterDefinitionWhereUniqueInput;
}
