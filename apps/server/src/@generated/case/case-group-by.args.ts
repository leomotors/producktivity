import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CaseWhereInput } from './case-where.input';
import { Type } from 'class-transformer';
import { CaseOrderByWithAggregationInput } from './case-order-by-with-aggregation.input';
import { CaseScalarFieldEnum } from './case-scalar-field.enum';
import { CaseScalarWhereWithAggregatesInput } from './case-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CaseCountAggregateInput } from './case-count-aggregate.input';
import { CaseMinAggregateInput } from './case-min-aggregate.input';
import { CaseMaxAggregateInput } from './case-max-aggregate.input';

@ArgsType()
export class CaseGroupByArgs {

    @Field(() => CaseWhereInput, {nullable:true})
    @Type(() => CaseWhereInput)
    where?: CaseWhereInput;

    @Field(() => [CaseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CaseOrderByWithAggregationInput>;

    @Field(() => [CaseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CaseScalarFieldEnum>;

    @Field(() => CaseScalarWhereWithAggregatesInput, {nullable:true})
    having?: CaseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CaseCountAggregateInput, {nullable:true})
    _count?: CaseCountAggregateInput;

    @Field(() => CaseMinAggregateInput, {nullable:true})
    _min?: CaseMinAggregateInput;

    @Field(() => CaseMaxAggregateInput, {nullable:true})
    _max?: CaseMaxAggregateInput;
}
