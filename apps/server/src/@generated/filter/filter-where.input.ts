import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CaseRelationFilter } from '../case/case-relation-filter.input';
import { FilterDefinitionRelationFilter } from '../filter-definition/filter-definition-relation-filter.input';

@InputType()
export class FilterWhereInput {

    @Field(() => [FilterWhereInput], {nullable:true})
    AND?: Array<FilterWhereInput>;

    @Field(() => [FilterWhereInput], {nullable:true})
    OR?: Array<FilterWhereInput>;

    @Field(() => [FilterWhereInput], {nullable:true})
    NOT?: Array<FilterWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => CaseRelationFilter, {nullable:true})
    case?: CaseRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    caseId?: StringFilter;

    @Field(() => FilterDefinitionRelationFilter, {nullable:true})
    FilterDefinition?: FilterDefinitionRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    filterDefinitionId?: StringFilter;
}
