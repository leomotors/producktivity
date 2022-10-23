import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilterWhereInput } from './filter-where.input';
import { Type } from 'class-transformer';
import { FilterOrderByWithRelationInput } from './filter-order-by-with-relation.input';
import { FilterWhereUniqueInput } from './filter-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FilterScalarFieldEnum } from './filter-scalar-field.enum';

@ArgsType()
export class FindManyFilterArgs {

    @Field(() => FilterWhereInput, {nullable:true})
    @Type(() => FilterWhereInput)
    where?: FilterWhereInput;

    @Field(() => [FilterOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FilterOrderByWithRelationInput>;

    @Field(() => FilterWhereUniqueInput, {nullable:true})
    cursor?: FilterWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FilterScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FilterScalarFieldEnum>;
}
