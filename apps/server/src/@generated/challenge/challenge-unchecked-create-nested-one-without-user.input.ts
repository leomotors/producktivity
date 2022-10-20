import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengeCreateWithoutUserInput } from './challenge-create-without-user.input';
import { Type } from 'class-transformer';
import { ChallengeCreateOrConnectWithoutUserInput } from './challenge-create-or-connect-without-user.input';
import { ChallengeWhereUniqueInput } from './challenge-where-unique.input';

@InputType()
export class ChallengeUncheckedCreateNestedOneWithoutUserInput {

    @Field(() => ChallengeCreateWithoutUserInput, {nullable:true})
    @Type(() => ChallengeCreateWithoutUserInput)
    create?: ChallengeCreateWithoutUserInput;

    @Field(() => ChallengeCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => ChallengeCreateOrConnectWithoutUserInput)
    connectOrCreate?: ChallengeCreateOrConnectWithoutUserInput;

    @Field(() => ChallengeWhereUniqueInput, {nullable:true})
    @Type(() => ChallengeWhereUniqueInput)
    connect?: ChallengeWhereUniqueInput;
}
