import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class AuthenticatorWhereInput {

    @Field(() => [AuthenticatorWhereInput], {nullable:true})
    AND?: Array<AuthenticatorWhereInput>;

    @Field(() => [AuthenticatorWhereInput], {nullable:true})
    OR?: Array<AuthenticatorWhereInput>;

    @Field(() => [AuthenticatorWhereInput], {nullable:true})
    NOT?: Array<AuthenticatorWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    fmt?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    publicKey?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    counter?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    credentialId?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}
