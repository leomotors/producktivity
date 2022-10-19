import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ChallengeCountAggregate } from './challenge-count-aggregate.output';
import { ChallengeMinAggregate } from './challenge-min-aggregate.output';
import { ChallengeMaxAggregate } from './challenge-max-aggregate.output';

@ObjectType()
export class ChallengeGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    challenge!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => ChallengeCountAggregate, {nullable:true})
    _count?: ChallengeCountAggregate;

    @Field(() => ChallengeMinAggregate, {nullable:true})
    _min?: ChallengeMinAggregate;

    @Field(() => ChallengeMaxAggregate, {nullable:true})
    _max?: ChallengeMaxAggregate;
}
