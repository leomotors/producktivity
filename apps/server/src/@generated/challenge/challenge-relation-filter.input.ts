import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengeWhereInput } from './challenge-where.input';

@InputType()
export class ChallengeRelationFilter {

    @Field(() => ChallengeWhereInput, {nullable:true})
    is?: ChallengeWhereInput;

    @Field(() => ChallengeWhereInput, {nullable:true})
    isNot?: ChallengeWhereInput;
}
