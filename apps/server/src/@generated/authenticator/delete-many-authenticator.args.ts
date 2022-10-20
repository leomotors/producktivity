import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthenticatorWhereInput } from './authenticator-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAuthenticatorArgs {

    @Field(() => AuthenticatorWhereInput, {nullable:true})
    @Type(() => AuthenticatorWhereInput)
    where?: AuthenticatorWhereInput;
}
