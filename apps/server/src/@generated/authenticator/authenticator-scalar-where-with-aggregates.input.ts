import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class AuthenticatorScalarWhereWithAggregatesInput {

    @Field(() => [AuthenticatorScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AuthenticatorScalarWhereWithAggregatesInput>;

    @Field(() => [AuthenticatorScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AuthenticatorScalarWhereWithAggregatesInput>;

    @Field(() => [AuthenticatorScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AuthenticatorScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    fmt?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    publicKey?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    counter?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    credentialId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;
}
