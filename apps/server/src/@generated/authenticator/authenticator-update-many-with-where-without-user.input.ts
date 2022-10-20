import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticatorScalarWhereInput } from './authenticator-scalar-where.input';
import { Type } from 'class-transformer';
import { AuthenticatorUpdateManyMutationInput } from './authenticator-update-many-mutation.input';

@InputType()
export class AuthenticatorUpdateManyWithWhereWithoutUserInput {

    @Field(() => AuthenticatorScalarWhereInput, {nullable:false})
    @Type(() => AuthenticatorScalarWhereInput)
    where!: AuthenticatorScalarWhereInput;

    @Field(() => AuthenticatorUpdateManyMutationInput, {nullable:false})
    @Type(() => AuthenticatorUpdateManyMutationInput)
    data!: AuthenticatorUpdateManyMutationInput;
}
