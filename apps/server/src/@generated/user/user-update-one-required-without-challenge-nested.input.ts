import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutChallengeInput } from './user-create-without-challenge.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutChallengeInput } from './user-create-or-connect-without-challenge.input';
import { UserUpsertWithoutChallengeInput } from './user-upsert-without-challenge.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutChallengeInput } from './user-update-without-challenge.input';

@InputType()
export class UserUpdateOneRequiredWithoutChallengeNestedInput {

    @Field(() => UserCreateWithoutChallengeInput, {nullable:true})
    @Type(() => UserCreateWithoutChallengeInput)
    create?: UserCreateWithoutChallengeInput;

    @Field(() => UserCreateOrConnectWithoutChallengeInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutChallengeInput)
    connectOrCreate?: UserCreateOrConnectWithoutChallengeInput;

    @Field(() => UserUpsertWithoutChallengeInput, {nullable:true})
    @Type(() => UserUpsertWithoutChallengeInput)
    upsert?: UserUpsertWithoutChallengeInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutChallengeInput, {nullable:true})
    @Type(() => UserUpdateWithoutChallengeInput)
    update?: UserUpdateWithoutChallengeInput;
}
