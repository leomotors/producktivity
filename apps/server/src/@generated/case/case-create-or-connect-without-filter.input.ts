import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseWhereUniqueInput } from './case-where-unique.input';
import { Type } from 'class-transformer';
import { CaseCreateWithoutFilterInput } from './case-create-without-filter.input';

@InputType()
export class CaseCreateOrConnectWithoutFilterInput {

    @Field(() => CaseWhereUniqueInput, {nullable:false})
    @Type(() => CaseWhereUniqueInput)
    where!: CaseWhereUniqueInput;

    @Field(() => CaseCreateWithoutFilterInput, {nullable:false})
    @Type(() => CaseCreateWithoutFilterInput)
    create!: CaseCreateWithoutFilterInput;
}
