import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChallengeCreateInput } from './challenge-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneChallengeArgs {

    @Field(() => ChallengeCreateInput, {nullable:false})
    @Type(() => ChallengeCreateInput)
    data!: ChallengeCreateInput;
}
