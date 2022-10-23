import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseWhereInput } from './case-where.input';

@InputType()
export class CaseRelationFilter {

    @Field(() => CaseWhereInput, {nullable:true})
    is?: CaseWhereInput;

    @Field(() => CaseWhereInput, {nullable:true})
    isNot?: CaseWhereInput;
}
