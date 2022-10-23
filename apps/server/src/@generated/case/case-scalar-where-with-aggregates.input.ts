import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CaseScalarWhereWithAggregatesInput {

    @Field(() => [CaseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CaseScalarWhereWithAggregatesInput>;

    @Field(() => [CaseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CaseScalarWhereWithAggregatesInput>;

    @Field(() => [CaseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CaseScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updateAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;
}
