import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilterWhereInput } from './filter-where.input';

@InputType()
export class FilterListRelationFilter {

    @Field(() => FilterWhereInput, {nullable:true})
    every?: FilterWhereInput;

    @Field(() => FilterWhereInput, {nullable:true})
    some?: FilterWhereInput;

    @Field(() => FilterWhereInput, {nullable:true})
    none?: FilterWhereInput;
}
