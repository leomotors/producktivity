import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilterDefinitionWhereInput } from './filter-definition-where.input';
import { Type } from 'class-transformer';
import { FilterDefinitionOrderByWithRelationInput } from './filter-definition-order-by-with-relation.input';
import { FilterDefinitionWhereUniqueInput } from './filter-definition-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FilterDefinitionScalarFieldEnum } from './filter-definition-scalar-field.enum';

@ArgsType()
export class FindManyFilterDefinitionArgs {

    @Field(() => FilterDefinitionWhereInput, {nullable:true})
    @Type(() => FilterDefinitionWhereInput)
    where?: FilterDefinitionWhereInput;

    @Field(() => [FilterDefinitionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FilterDefinitionOrderByWithRelationInput>;

    @Field(() => FilterDefinitionWhereUniqueInput, {nullable:true})
    cursor?: FilterDefinitionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FilterDefinitionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FilterDefinitionScalarFieldEnum>;
}
