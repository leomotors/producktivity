import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class FilterScalarWhereInput {

    @Field(() => [FilterScalarWhereInput], {nullable:true})
    AND?: Array<FilterScalarWhereInput>;

    @Field(() => [FilterScalarWhereInput], {nullable:true})
    OR?: Array<FilterScalarWhereInput>;

    @Field(() => [FilterScalarWhereInput], {nullable:true})
    NOT?: Array<FilterScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    caseId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    filterDefinitionId?: StringFilter;
}
