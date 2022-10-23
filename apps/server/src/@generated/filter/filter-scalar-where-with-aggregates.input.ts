import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class FilterScalarWhereWithAggregatesInput {

    @Field(() => [FilterScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FilterScalarWhereWithAggregatesInput>;

    @Field(() => [FilterScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FilterScalarWhereWithAggregatesInput>;

    @Field(() => [FilterScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FilterScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    caseId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    filterDefinitionId?: StringWithAggregatesFilter;
}
