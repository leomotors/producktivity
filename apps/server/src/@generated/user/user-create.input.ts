import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticatorCreateNestedManyWithoutUserInput } from '../authenticator/authenticator-create-nested-many-without-user.input';
import { ChallengeCreateNestedOneWithoutUserInput } from '../challenge/challenge-create-nested-one-without-user.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => Boolean, {nullable:true})
    registered?: boolean;

    @Field(() => AuthenticatorCreateNestedManyWithoutUserInput, {nullable:true})
    authenticators?: AuthenticatorCreateNestedManyWithoutUserInput;

    @Field(() => ChallengeCreateNestedOneWithoutUserInput, {nullable:true})
    challenge?: ChallengeCreateNestedOneWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
