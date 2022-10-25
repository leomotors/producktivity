import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class HabitScalarWhereInput {

    @Field(() => [HabitScalarWhereInput], {nullable:true})
    AND?: Array<HabitScalarWhereInput>;

    @Field(() => [HabitScalarWhereInput], {nullable:true})
    OR?: Array<HabitScalarWhereInput>;

    @Field(() => [HabitScalarWhereInput], {nullable:true})
    NOT?: Array<HabitScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    tags?: StringNullableListFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    currentCount?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    targetCount?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}
