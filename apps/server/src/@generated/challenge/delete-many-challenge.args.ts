import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChallengeWhereInput } from './challenge-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyChallengeArgs {

    @Field(() => ChallengeWhereInput, {nullable:true})
    @Type(() => ChallengeWhereInput)
    where?: ChallengeWhereInput;
}
