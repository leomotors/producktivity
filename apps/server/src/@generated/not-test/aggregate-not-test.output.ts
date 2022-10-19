import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NotTestCountAggregate } from './not-test-count-aggregate.output';
import { NotTestMinAggregate } from './not-test-min-aggregate.output';
import { NotTestMaxAggregate } from './not-test-max-aggregate.output';

@ObjectType()
export class AggregateNotTest {

    @Field(() => NotTestCountAggregate, {nullable:true})
    _count?: NotTestCountAggregate;

    @Field(() => NotTestMinAggregate, {nullable:true})
    _min?: NotTestMinAggregate;

    @Field(() => NotTestMaxAggregate, {nullable:true})
    _max?: NotTestMaxAggregate;
}
