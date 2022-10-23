import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CaseRelationFilter } from '../case/case-relation-filter.input';

@InputType()
export class HabitWhereInput {

    @Field(() => [HabitWhereInput], {nullable:true})
    AND?: Array<HabitWhereInput>;

    @Field(() => [HabitWhereInput], {nullable:true})
    OR?: Array<HabitWhereInput>;

    @Field(() => [HabitWhereInput], {nullable:true})
    NOT?: Array<HabitWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updateAt?: DateTimeFilter;

    @Field(() => CaseRelationFilter, {nullable:true})
    case?: CaseRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    caseId?: StringFilter;
}
