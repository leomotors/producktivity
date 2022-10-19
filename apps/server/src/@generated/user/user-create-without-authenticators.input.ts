import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengeCreateNestedOneWithoutUserInput } from '../challenge/challenge-create-nested-one-without-user.input';

@InputType()
export class UserCreateWithoutAuthenticatorsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => Boolean, {nullable:true})
    registered?: boolean;

    @Field(() => ChallengeCreateNestedOneWithoutUserInput, {nullable:true})
    challenge?: ChallengeCreateNestedOneWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
