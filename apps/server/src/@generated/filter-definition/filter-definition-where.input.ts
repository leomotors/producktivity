import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FilterListRelationFilter } from '../filter/filter-list-relation-filter.input';

@InputType()
export class FilterDefinitionWhereInput {

    @Field(() => [FilterDefinitionWhereInput], {nullable:true})
    AND?: Array<FilterDefinitionWhereInput>;

    @Field(() => [FilterDefinitionWhereInput], {nullable:true})
    OR?: Array<FilterDefinitionWhereInput>;

    @Field(() => [FilterDefinitionWhereInput], {nullable:true})
    NOT?: Array<FilterDefinitionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    label?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;

    @Field(() => FilterListRelationFilter, {nullable:true})
    filter?: FilterListRelationFilter;
}
