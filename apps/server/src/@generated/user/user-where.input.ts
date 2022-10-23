import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { AuthenticatorListRelationFilter } from '../authenticator/authenticator-list-relation-filter.input';
import { ChallengeRelationFilter } from '../challenge/challenge-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CaseListRelationFilter } from '../case/case-list-relation-filter.input';
import { NotificationListRelationFilter } from '../notification/notification-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    registered?: BoolFilter;

    @Field(() => AuthenticatorListRelationFilter, {nullable:true})
    authenticators?: AuthenticatorListRelationFilter;

    @Field(() => ChallengeRelationFilter, {nullable:true})
    challenge?: ChallengeRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => CaseListRelationFilter, {nullable:true})
    case?: CaseListRelationFilter;

    @Field(() => NotificationListRelationFilter, {nullable:true})
    notification?: NotificationListRelationFilter;
}
