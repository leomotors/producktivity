import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthenticatorWhereUniqueInput } from './authenticator-where-unique.input';
import { Type } from 'class-transformer';
import { AuthenticatorCreateInput } from './authenticator-create.input';
import { AuthenticatorUpdateInput } from './authenticator-update.input';

@ArgsType()
export class UpsertOneAuthenticatorArgs {

    @Field(() => AuthenticatorWhereUniqueInput, {nullable:false})
    @Type(() => AuthenticatorWhereUniqueInput)
    where!: AuthenticatorWhereUniqueInput;

    @Field(() => AuthenticatorCreateInput, {nullable:false})
    @Type(() => AuthenticatorCreateInput)
    create!: AuthenticatorCreateInput;

    @Field(() => AuthenticatorUpdateInput, {nullable:false})
    @Type(() => AuthenticatorUpdateInput)
    update!: AuthenticatorUpdateInput;
}
