import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChallengeWhereUniqueInput } from './challenge-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneChallengeArgs {

    @Field(() => ChallengeWhereUniqueInput, {nullable:false})
    @Type(() => ChallengeWhereUniqueInput)
    where!: ChallengeWhereUniqueInput;
}
