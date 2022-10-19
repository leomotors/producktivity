import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengeUpdateWithoutUserInput } from './challenge-update-without-user.input';
import { Type } from 'class-transformer';
import { ChallengeCreateWithoutUserInput } from './challenge-create-without-user.input';

@InputType()
export class ChallengeUpsertWithoutUserInput {

    @Field(() => ChallengeUpdateWithoutUserInput, {nullable:false})
    @Type(() => ChallengeUpdateWithoutUserInput)
    update!: ChallengeUpdateWithoutUserInput;

    @Field(() => ChallengeCreateWithoutUserInput, {nullable:false})
    @Type(() => ChallengeCreateWithoutUserInput)
    create!: ChallengeCreateWithoutUserInput;
}
