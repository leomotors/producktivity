import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutChallengeInput } from './user-create-without-challenge.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutChallengeInput } from './user-create-or-connect-without-challenge.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutChallengeInput {

    @Field(() => UserCreateWithoutChallengeInput, {nullable:true})
    @Type(() => UserCreateWithoutChallengeInput)
    create?: UserCreateWithoutChallengeInput;

    @Field(() => UserCreateOrConnectWithoutChallengeInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutChallengeInput)
    connectOrCreate?: UserCreateOrConnectWithoutChallengeInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
