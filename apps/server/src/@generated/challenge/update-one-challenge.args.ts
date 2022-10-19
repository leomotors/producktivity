import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChallengeUpdateInput } from './challenge-update.input';
import { Type } from 'class-transformer';
import { ChallengeWhereUniqueInput } from './challenge-where-unique.input';

@ArgsType()
export class UpdateOneChallengeArgs {

    @Field(() => ChallengeUpdateInput, {nullable:false})
    @Type(() => ChallengeUpdateInput)
    data!: ChallengeUpdateInput;

    @Field(() => ChallengeWhereUniqueInput, {nullable:false})
    @Type(() => ChallengeWhereUniqueInput)
    where!: ChallengeWhereUniqueInput;
}
