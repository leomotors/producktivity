import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AuthenticatorAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    counter?: keyof typeof SortOrder;
}
