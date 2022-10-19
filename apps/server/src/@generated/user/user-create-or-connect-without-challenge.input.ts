import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutChallengeInput } from './user-create-without-challenge.input';

@InputType()
export class UserCreateOrConnectWithoutChallengeInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutChallengeInput, {nullable:false})
    @Type(() => UserCreateWithoutChallengeInput)
    create!: UserCreateWithoutChallengeInput;
}
