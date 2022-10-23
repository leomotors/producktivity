import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CaseCountAggregate } from './case-count-aggregate.output';
import { CaseMinAggregate } from './case-min-aggregate.output';
import { CaseMaxAggregate } from './case-max-aggregate.output';

@ObjectType()
export class AggregateCase {

    @Field(() => CaseCountAggregate, {nullable:true})
    _count?: CaseCountAggregate;

    @Field(() => CaseMinAggregate, {nullable:true})
    _min?: CaseMinAggregate;

    @Field(() => CaseMaxAggregate, {nullable:true})
    _max?: CaseMaxAggregate;
}
