import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotTestWhereInput } from './not-test-where.input';
import { Type } from 'class-transformer';
import { NotTestOrderByWithRelationInput } from './not-test-order-by-with-relation.input';
import { NotTestWhereUniqueInput } from './not-test-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NotTestCountAggregateInput } from './not-test-count-aggregate.input';
import { NotTestMinAggregateInput } from './not-test-min-aggregate.input';
import { NotTestMaxAggregateInput } from './not-test-max-aggregate.input';

@ArgsType()
export class NotTestAggregateArgs {

    @Field(() => NotTestWhereInput, {nullable:true})
    @Type(() => NotTestWhereInput)
    where?: NotTestWhereInput;

    @Field(() => [NotTestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NotTestOrderByWithRelationInput>;

    @Field(() => NotTestWhereUniqueInput, {nullable:true})
    cursor?: NotTestWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => NotTestCountAggregateInput, {nullable:true})
    _count?: NotTestCountAggregateInput;

    @Field(() => NotTestMinAggregateInput, {nullable:true})
    _min?: NotTestMinAggregateInput;

    @Field(() => NotTestMaxAggregateInput, {nullable:true})
    _max?: NotTestMaxAggregateInput;
}
