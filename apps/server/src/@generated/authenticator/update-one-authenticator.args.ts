import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthenticatorUpdateInput } from './authenticator-update.input';
import { Type } from 'class-transformer';
import { AuthenticatorWhereUniqueInput } from './authenticator-where-unique.input';

@ArgsType()
export class UpdateOneAuthenticatorArgs {

    @Field(() => AuthenticatorUpdateInput, {nullable:false})
    @Type(() => AuthenticatorUpdateInput)
    data!: AuthenticatorUpdateInput;

    @Field(() => AuthenticatorWhereUniqueInput, {nullable:false})
    @Type(() => AuthenticatorWhereUniqueInput)
    where!: AuthenticatorWhereUniqueInput;
}
