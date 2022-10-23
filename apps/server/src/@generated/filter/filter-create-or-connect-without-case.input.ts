import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilterWhereUniqueInput } from './filter-where-unique.input';
import { Type } from 'class-transformer';
import { FilterCreateWithoutCaseInput } from './filter-create-without-case.input';

@InputType()
export class FilterCreateOrConnectWithoutCaseInput {

    @Field(() => FilterWhereUniqueInput, {nullable:false})
    @Type(() => FilterWhereUniqueInput)
    where!: FilterWhereUniqueInput;

    @Field(() => FilterCreateWithoutCaseInput, {nullable:false})
    @Type(() => FilterCreateWithoutCaseInput)
    create!: FilterCreateWithoutCaseInput;
}
