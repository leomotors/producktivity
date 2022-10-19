import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengeCreateWithoutUserInput } from './challenge-create-without-user.input';
import { Type } from 'class-transformer';
import { ChallengeCreateOrConnectWithoutUserInput } from './challenge-create-or-connect-without-user.input';
import { ChallengeUpsertWithoutUserInput } from './challenge-upsert-without-user.input';
import { ChallengeWhereUniqueInput } from './challenge-where-unique.input';
import { ChallengeUpdateWithoutUserInput } from './challenge-update-without-user.input';

@InputType()
export class ChallengeUpdateOneWithoutUserNestedInput {

    @Field(() => ChallengeCreateWithoutUserInput, {nullable:true})
    @Type(() => ChallengeCreateWithoutUserInput)
    create?: ChallengeCreateWithoutUserInput;

    @Field(() => ChallengeCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => ChallengeCreateOrConnectWithoutUserInput)
    connectOrCreate?: ChallengeCreateOrConnectWithoutUserInput;

    @Field(() => ChallengeUpsertWithoutUserInput, {nullable:true})
    @Type(() => ChallengeUpsertWithoutUserInput)
    upsert?: ChallengeUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ChallengeWhereUniqueInput, {nullable:true})
    @Type(() => ChallengeWhereUniqueInput)
    connect?: ChallengeWhereUniqueInput;

    @Field(() => ChallengeUpdateWithoutUserInput, {nullable:true})
    @Type(() => ChallengeUpdateWithoutUserInput)
    update?: ChallengeUpdateWithoutUserInput;
}
