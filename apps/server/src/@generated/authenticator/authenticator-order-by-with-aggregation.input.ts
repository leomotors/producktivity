import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AuthenticatorCountOrderByAggregateInput } from './authenticator-count-order-by-aggregate.input';
import { AuthenticatorAvgOrderByAggregateInput } from './authenticator-avg-order-by-aggregate.input';
import { AuthenticatorMaxOrderByAggregateInput } from './authenticator-max-order-by-aggregate.input';
import { AuthenticatorMinOrderByAggregateInput } from './authenticator-min-order-by-aggregate.input';
import { AuthenticatorSumOrderByAggregateInput } from './authenticator-sum-order-by-aggregate.input';

@InputType()
export class AuthenticatorOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fmt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    publicKey?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    counter?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    credentialId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => AuthenticatorCountOrderByAggregateInput, {nullable:true})
    _count?: AuthenticatorCountOrderByAggregateInput;

    @Field(() => AuthenticatorAvgOrderByAggregateInput, {nullable:true})
    _avg?: AuthenticatorAvgOrderByAggregateInput;

    @Field(() => AuthenticatorMaxOrderByAggregateInput, {nullable:true})
    _max?: AuthenticatorMaxOrderByAggregateInput;

    @Field(() => AuthenticatorMinOrderByAggregateInput, {nullable:true})
    _min?: AuthenticatorMinOrderByAggregateInput;

    @Field(() => AuthenticatorSumOrderByAggregateInput, {nullable:true})
    _sum?: AuthenticatorSumOrderByAggregateInput;
}
