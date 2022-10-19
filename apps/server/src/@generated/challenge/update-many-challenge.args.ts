import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChallengeUpdateManyMutationInput } from './challenge-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ChallengeWhereInput } from './challenge-where.input';

@ArgsType()
export class UpdateManyChallengeArgs {

    @Field(() => ChallengeUpdateManyMutationInput, {nullable:false})
    @Type(() => ChallengeUpdateManyMutationInput)
    data!: ChallengeUpdateManyMutationInput;

    @Field(() => ChallengeWhereInput, {nullable:true})
    @Type(() => ChallengeWhereInput)
    where?: ChallengeWhereInput;
}
