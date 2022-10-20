import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChallengeCountOrderByAggregateInput } from './challenge-count-order-by-aggregate.input';
import { ChallengeMaxOrderByAggregateInput } from './challenge-max-order-by-aggregate.input';
import { ChallengeMinOrderByAggregateInput } from './challenge-min-order-by-aggregate.input';

@InputType()
export class ChallengeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    challenge?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => ChallengeCountOrderByAggregateInput, {nullable:true})
    _count?: ChallengeCountOrderByAggregateInput;

    @Field(() => ChallengeMaxOrderByAggregateInput, {nullable:true})
    _max?: ChallengeMaxOrderByAggregateInput;

    @Field(() => ChallengeMinOrderByAggregateInput, {nullable:true})
    _min?: ChallengeMinOrderByAggregateInput;
}
