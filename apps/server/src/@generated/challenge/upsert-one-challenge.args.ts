import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChallengeWhereUniqueInput } from './challenge-where-unique.input';
import { Type } from 'class-transformer';
import { ChallengeCreateInput } from './challenge-create.input';
import { ChallengeUpdateInput } from './challenge-update.input';

@ArgsType()
export class UpsertOneChallengeArgs {

    @Field(() => ChallengeWhereUniqueInput, {nullable:false})
    @Type(() => ChallengeWhereUniqueInput)
    where!: ChallengeWhereUniqueInput;

    @Field(() => ChallengeCreateInput, {nullable:false})
    @Type(() => ChallengeCreateInput)
    create!: ChallengeCreateInput;

    @Field(() => ChallengeUpdateInput, {nullable:false})
    @Type(() => ChallengeUpdateInput)
    update!: ChallengeUpdateInput;
}
