import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutChallengeInput } from '../user/user-create-nested-one-without-challenge.input';

@InputType()
export class ChallengeCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    challenge!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutChallengeInput, {nullable:false})
    user!: UserCreateNestedOneWithoutChallengeInput;
}
