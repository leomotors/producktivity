import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilterWhereUniqueInput } from './filter-where-unique.input';
import { Type } from 'class-transformer';
import { FilterUpdateWithoutCaseInput } from './filter-update-without-case.input';
import { FilterCreateWithoutCaseInput } from './filter-create-without-case.input';

@InputType()
export class FilterUpsertWithWhereUniqueWithoutCaseInput {

    @Field(() => FilterWhereUniqueInput, {nullable:false})
    @Type(() => FilterWhereUniqueInput)
    where!: FilterWhereUniqueInput;

    @Field(() => FilterUpdateWithoutCaseInput, {nullable:false})
    @Type(() => FilterUpdateWithoutCaseInput)
    update!: FilterUpdateWithoutCaseInput;

    @Field(() => FilterCreateWithoutCaseInput, {nullable:false})
    @Type(() => FilterCreateWithoutCaseInput)
    create!: FilterCreateWithoutCaseInput;
}
