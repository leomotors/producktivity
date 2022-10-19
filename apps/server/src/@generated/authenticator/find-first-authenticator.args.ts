import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthenticatorWhereInput } from './authenticator-where.input';
import { Type } from 'class-transformer';
import { AuthenticatorOrderByWithRelationInput } from './authenticator-order-by-with-relation.input';
import { AuthenticatorWhereUniqueInput } from './authenticator-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AuthenticatorScalarFieldEnum } from './authenticator-scalar-field.enum';

@ArgsType()
export class FindFirstAuthenticatorArgs {

    @Field(() => AuthenticatorWhereInput, {nullable:true})
    @Type(() => AuthenticatorWhereInput)
    where?: AuthenticatorWhereInput;

    @Field(() => [AuthenticatorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AuthenticatorOrderByWithRelationInput>;

    @Field(() => AuthenticatorWhereUniqueInput, {nullable:true})
    cursor?: AuthenticatorWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AuthenticatorScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AuthenticatorScalarFieldEnum>;
}
