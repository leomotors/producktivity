import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthenticatorCreateManyInput } from './authenticator-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAuthenticatorArgs {

    @Field(() => [AuthenticatorCreateManyInput], {nullable:false})
    @Type(() => AuthenticatorCreateManyInput)
    data!: Array<AuthenticatorCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
