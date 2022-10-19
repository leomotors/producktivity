import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class ChallengeWhereInput {

    @Field(() => [ChallengeWhereInput], {nullable:true})
    AND?: Array<ChallengeWhereInput>;

    @Field(() => [ChallengeWhereInput], {nullable:true})
    OR?: Array<ChallengeWhereInput>;

    @Field(() => [ChallengeWhereInput], {nullable:true})
    NOT?: Array<ChallengeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    challenge?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}
