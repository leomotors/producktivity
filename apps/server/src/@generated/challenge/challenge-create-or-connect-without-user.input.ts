import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengeWhereUniqueInput } from './challenge-where-unique.input';
import { Type } from 'class-transformer';
import { ChallengeCreateWithoutUserInput } from './challenge-create-without-user.input';

@InputType()
export class ChallengeCreateOrConnectWithoutUserInput {

    @Field(() => ChallengeWhereUniqueInput, {nullable:false})
    @Type(() => ChallengeWhereUniqueInput)
    where!: ChallengeWhereUniqueInput;

    @Field(() => ChallengeCreateWithoutUserInput, {nullable:false})
    @Type(() => ChallengeCreateWithoutUserInput)
    create!: ChallengeCreateWithoutUserInput;
}
