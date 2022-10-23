import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseCreateWithoutFilterInput } from './case-create-without-filter.input';
import { Type } from 'class-transformer';
import { CaseCreateOrConnectWithoutFilterInput } from './case-create-or-connect-without-filter.input';
import { CaseWhereUniqueInput } from './case-where-unique.input';

@InputType()
export class CaseCreateNestedOneWithoutFilterInput {

    @Field(() => CaseCreateWithoutFilterInput, {nullable:true})
    @Type(() => CaseCreateWithoutFilterInput)
    create?: CaseCreateWithoutFilterInput;

    @Field(() => CaseCreateOrConnectWithoutFilterInput, {nullable:true})
    @Type(() => CaseCreateOrConnectWithoutFilterInput)
    connectOrCreate?: CaseCreateOrConnectWithoutFilterInput;

    @Field(() => CaseWhereUniqueInput, {nullable:true})
    @Type(() => CaseWhereUniqueInput)
    connect?: CaseWhereUniqueInput;
}
