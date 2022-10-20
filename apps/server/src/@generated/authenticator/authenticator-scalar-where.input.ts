import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class AuthenticatorScalarWhereInput {

    @Field(() => [AuthenticatorScalarWhereInput], {nullable:true})
    AND?: Array<AuthenticatorScalarWhereInput>;

    @Field(() => [AuthenticatorScalarWhereInput], {nullable:true})
    OR?: Array<AuthenticatorScalarWhereInput>;

    @Field(() => [AuthenticatorScalarWhereInput], {nullable:true})
    NOT?: Array<AuthenticatorScalarWhereInput>;

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

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}
