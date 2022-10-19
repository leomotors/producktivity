import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthenticatorWhereInput } from './authenticator-where.input';
import { Type } from 'class-transformer';
import { AuthenticatorOrderByWithAggregationInput } from './authenticator-order-by-with-aggregation.input';
import { AuthenticatorScalarFieldEnum } from './authenticator-scalar-field.enum';
import { AuthenticatorScalarWhereWithAggregatesInput } from './authenticator-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AuthenticatorCountAggregateInput } from './authenticator-count-aggregate.input';
import { AuthenticatorAvgAggregateInput } from './authenticator-avg-aggregate.input';
import { AuthenticatorSumAggregateInput } from './authenticator-sum-aggregate.input';
import { AuthenticatorMinAggregateInput } from './authenticator-min-aggregate.input';
import { AuthenticatorMaxAggregateInput } from './authenticator-max-aggregate.input';

@ArgsType()
export class AuthenticatorGroupByArgs {

    @Field(() => AuthenticatorWhereInput, {nullable:true})
    @Type(() => AuthenticatorWhereInput)
    where?: AuthenticatorWhereInput;

    @Field(() => [AuthenticatorOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AuthenticatorOrderByWithAggregationInput>;

    @Field(() => [AuthenticatorScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AuthenticatorScalarFieldEnum>;

    @Field(() => AuthenticatorScalarWhereWithAggregatesInput, {nullable:true})
    having?: AuthenticatorScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AuthenticatorCountAggregateInput, {nullable:true})
    _count?: AuthenticatorCountAggregateInput;

    @Field(() => AuthenticatorAvgAggregateInput, {nullable:true})
    _avg?: AuthenticatorAvgAggregateInput;

    @Field(() => AuthenticatorSumAggregateInput, {nullable:true})
    _sum?: AuthenticatorSumAggregateInput;

    @Field(() => AuthenticatorMinAggregateInput, {nullable:true})
    _min?: AuthenticatorMinAggregateInput;

    @Field(() => AuthenticatorMaxAggregateInput, {nullable:true})
    _max?: AuthenticatorMaxAggregateInput;
}
