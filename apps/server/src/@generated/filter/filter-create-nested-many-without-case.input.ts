import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilterCreateWithoutCaseInput } from './filter-create-without-case.input';
import { Type } from 'class-transformer';
import { FilterCreateOrConnectWithoutCaseInput } from './filter-create-or-connect-without-case.input';
import { FilterCreateManyCaseInputEnvelope } from './filter-create-many-case-input-envelope.input';
import { FilterWhereUniqueInput } from './filter-where-unique.input';

@InputType()
export class FilterCreateNestedManyWithoutCaseInput {

    @Field(() => [FilterCreateWithoutCaseInput], {nullable:true})
    @Type(() => FilterCreateWithoutCaseInput)
    create?: Array<FilterCreateWithoutCaseInput>;

    @Field(() => [FilterCreateOrConnectWithoutCaseInput], {nullable:true})
    @Type(() => FilterCreateOrConnectWithoutCaseInput)
    connectOrCreate?: Array<FilterCreateOrConnectWithoutCaseInput>;

    @Field(() => FilterCreateManyCaseInputEnvelope, {nullable:true})
    @Type(() => FilterCreateManyCaseInputEnvelope)
    createMany?: FilterCreateManyCaseInputEnvelope;

    @Field(() => [FilterWhereUniqueInput], {nullable:true})
    @Type(() => FilterWhereUniqueInput)
    connect?: Array<FilterWhereUniqueInput>;
}
