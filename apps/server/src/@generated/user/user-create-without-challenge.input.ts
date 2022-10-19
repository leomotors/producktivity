import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticatorCreateNestedManyWithoutUserInput } from '../authenticator/authenticator-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutChallengeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => Boolean, {nullable:true})
    registered?: boolean;

    @Field(() => AuthenticatorCreateNestedManyWithoutUserInput, {nullable:true})
    authenticators?: AuthenticatorCreateNestedManyWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
