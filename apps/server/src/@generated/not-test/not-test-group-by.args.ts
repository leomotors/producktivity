import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotTestWhereInput } from './not-test-where.input';
import { Type } from 'class-transformer';
import { NotTestOrderByWithAggregationInput } from './not-test-order-by-with-aggregation.input';
import { NotTestScalarFieldEnum } from './not-test-scalar-field.enum';
import { NotTestScalarWhereWithAggregatesInput } from './not-test-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { NotTestCountAggregateInput } from './not-test-count-aggregate.input';
import { NotTestMinAggregateInput } from './not-test-min-aggregate.input';
import { NotTestMaxAggregateInput } from './not-test-max-aggregate.input';

@ArgsType()
export class NotTestGroupByArgs {

    @Field(() => NotTestWhereInput, {nullable:true})
    @Type(() => NotTestWhereInput)
    where?: NotTestWhereInput;

    @Field(() => [NotTestOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<NotTestOrderByWithAggregationInput>;

    @Field(() => [NotTestScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof NotTestScalarFieldEnum>;

    @Field(() => NotTestScalarWhereWithAggregatesInput, {nullable:true})
    having?: NotTestScalarWhereWithAggregatesInput;

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
