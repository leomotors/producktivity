import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotTestWhereInput } from './not-test-where.input';
import { Type } from 'class-transformer';
import { NotTestOrderByWithRelationInput } from './not-test-order-by-with-relation.input';
import { NotTestWhereUniqueInput } from './not-test-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NotTestScalarFieldEnum } from './not-test-scalar-field.enum';

@ArgsType()
export class FindManyNotTestArgs {

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

    @Field(() => [NotTestScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NotTestScalarFieldEnum>;
}
