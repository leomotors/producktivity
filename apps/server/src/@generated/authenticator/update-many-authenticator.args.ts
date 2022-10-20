import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthenticatorUpdateManyMutationInput } from './authenticator-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AuthenticatorWhereInput } from './authenticator-where.input';

@ArgsType()
export class UpdateManyAuthenticatorArgs {

    @Field(() => AuthenticatorUpdateManyMutationInput, {nullable:false})
    @Type(() => AuthenticatorUpdateManyMutationInput)
    data!: AuthenticatorUpdateManyMutationInput;

    @Field(() => AuthenticatorWhereInput, {nullable:true})
    @Type(() => AuthenticatorWhereInput)
    where?: AuthenticatorWhereInput;
}
