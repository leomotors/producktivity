import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CaseWhereInput } from './case-where.input';
import { Type } from 'class-transformer';
import { CaseOrderByWithRelationInput } from './case-order-by-with-relation.input';
import { CaseWhereUniqueInput } from './case-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CaseScalarFieldEnum } from './case-scalar-field.enum';

@ArgsType()
export class FindFirstCaseArgs {

    @Field(() => CaseWhereInput, {nullable:true})
    @Type(() => CaseWhereInput)
    where?: CaseWhereInput;

    @Field(() => [CaseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CaseOrderByWithRelationInput>;

    @Field(() => CaseWhereUniqueInput, {nullable:true})
    cursor?: CaseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CaseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CaseScalarFieldEnum>;
}
