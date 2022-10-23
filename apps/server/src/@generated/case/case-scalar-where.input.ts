import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CaseScalarWhereInput {

    @Field(() => [CaseScalarWhereInput], {nullable:true})
    AND?: Array<CaseScalarWhereInput>;

    @Field(() => [CaseScalarWhereInput], {nullable:true})
    OR?: Array<CaseScalarWhereInput>;

    @Field(() => [CaseScalarWhereInput], {nullable:true})
    NOT?: Array<CaseScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updateAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}
