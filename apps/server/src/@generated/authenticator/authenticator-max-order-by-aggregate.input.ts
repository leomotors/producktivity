import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AuthenticatorMaxOrderByAggregateInput {

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
}
