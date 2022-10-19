import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ChallengeScalarWhereWithAggregatesInput {

    @Field(() => [ChallengeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ChallengeScalarWhereWithAggregatesInput>;

    @Field(() => [ChallengeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ChallengeScalarWhereWithAggregatesInput>;

    @Field(() => [ChallengeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ChallengeScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    challenge?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;
}
