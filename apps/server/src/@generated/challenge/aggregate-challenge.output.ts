import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ChallengeCountAggregate } from './challenge-count-aggregate.output';
import { ChallengeMinAggregate } from './challenge-min-aggregate.output';
import { ChallengeMaxAggregate } from './challenge-max-aggregate.output';

@ObjectType()
export class AggregateChallenge {

    @Field(() => ChallengeCountAggregate, {nullable:true})
    _count?: ChallengeCountAggregate;

    @Field(() => ChallengeMinAggregate, {nullable:true})
    _min?: ChallengeMinAggregate;

    @Field(() => ChallengeMaxAggregate, {nullable:true})
    _max?: ChallengeMaxAggregate;
}
