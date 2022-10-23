import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilterDefinitionCreateWithoutFilterInput } from './filter-definition-create-without-filter.input';
import { Type } from 'class-transformer';
import { FilterDefinitionCreateOrConnectWithoutFilterInput } from './filter-definition-create-or-connect-without-filter.input';
import { FilterDefinitionUpsertWithoutFilterInput } from './filter-definition-upsert-without-filter.input';
import { FilterDefinitionWhereUniqueInput } from './filter-definition-where-unique.input';
import { FilterDefinitionUpdateWithoutFilterInput } from './filter-definition-update-without-filter.input';

@InputType()
export class FilterDefinitionUpdateOneRequiredWithoutFilterNestedInput {

    @Field(() => FilterDefinitionCreateWithoutFilterInput, {nullable:true})
    @Type(() => FilterDefinitionCreateWithoutFilterInput)
    create?: FilterDefinitionCreateWithoutFilterInput;

    @Field(() => FilterDefinitionCreateOrConnectWithoutFilterInput, {nullable:true})
    @Type(() => FilterDefinitionCreateOrConnectWithoutFilterInput)
    connectOrCreate?: FilterDefinitionCreateOrConnectWithoutFilterInput;

    @Field(() => FilterDefinitionUpsertWithoutFilterInput, {nullable:true})
    @Type(() => FilterDefinitionUpsertWithoutFilterInput)
    upsert?: FilterDefinitionUpsertWithoutFilterInput;

    @Field(() => FilterDefinitionWhereUniqueInput, {nullable:true})
    @Type(() => FilterDefinitionWhereUniqueInput)
    connect?: FilterDefinitionWhereUniqueInput;

    @Field(() => FilterDefinitionUpdateWithoutFilterInput, {nullable:true})
    @Type(() => FilterDefinitionUpdateWithoutFilterInput)
    update?: FilterDefinitionUpdateWithoutFilterInput;
}
