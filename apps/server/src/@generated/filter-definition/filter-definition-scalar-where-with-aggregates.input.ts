import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class FilterDefinitionScalarWhereWithAggregatesInput {

    @Field(() => [FilterDefinitionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FilterDefinitionScalarWhereWithAggregatesInput>;

    @Field(() => [FilterDefinitionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FilterDefinitionScalarWhereWithAggregatesInput>;

    @Field(() => [FilterDefinitionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FilterDefinitionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    label?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    order?: IntWithAggregatesFilter;
}
