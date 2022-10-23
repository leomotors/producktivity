import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseWhereInput } from './case-where.input';

@InputType()
export class CaseListRelationFilter {

    @Field(() => CaseWhereInput, {nullable:true})
    every?: CaseWhereInput;

    @Field(() => CaseWhereInput, {nullable:true})
    some?: CaseWhereInput;

    @Field(() => CaseWhereInput, {nullable:true})
    none?: CaseWhereInput;
}
