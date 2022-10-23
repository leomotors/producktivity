import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilterCreateWithoutCaseInput } from './filter-create-without-case.input';
import { Type } from 'class-transformer';
import { FilterCreateOrConnectWithoutCaseInput } from './filter-create-or-connect-without-case.input';
import { FilterUpsertWithWhereUniqueWithoutCaseInput } from './filter-upsert-with-where-unique-without-case.input';
import { FilterCreateManyCaseInputEnvelope } from './filter-create-many-case-input-envelope.input';
import { FilterWhereUniqueInput } from './filter-where-unique.input';
import { FilterUpdateWithWhereUniqueWithoutCaseInput } from './filter-update-with-where-unique-without-case.input';
import { FilterUpdateManyWithWhereWithoutCaseInput } from './filter-update-many-with-where-without-case.input';
import { FilterScalarWhereInput } from './filter-scalar-where.input';

@InputType()
export class FilterUncheckedUpdateManyWithoutCaseNestedInput {

    @Field(() => [FilterCreateWithoutCaseInput], {nullable:true})
    @Type(() => FilterCreateWithoutCaseInput)
    create?: Array<FilterCreateWithoutCaseInput>;

    @Field(() => [FilterCreateOrConnectWithoutCaseInput], {nullable:true})
    @Type(() => FilterCreateOrConnectWithoutCaseInput)
    connectOrCreate?: Array<FilterCreateOrConnectWithoutCaseInput>;

    @Field(() => [FilterUpsertWithWhereUniqueWithoutCaseInput], {nullable:true})
    @Type(() => FilterUpsertWithWhereUniqueWithoutCaseInput)
    upsert?: Array<FilterUpsertWithWhereUniqueWithoutCaseInput>;

    @Field(() => FilterCreateManyCaseInputEnvelope, {nullable:true})
    @Type(() => FilterCreateManyCaseInputEnvelope)
    createMany?: FilterCreateManyCaseInputEnvelope;

    @Field(() => [FilterWhereUniqueInput], {nullable:true})
    @Type(() => FilterWhereUniqueInput)
    set?: Array<FilterWhereUniqueInput>;

    @Field(() => [FilterWhereUniqueInput], {nullable:true})
    @Type(() => FilterWhereUniqueInput)
    disconnect?: Array<FilterWhereUniqueInput>;

    @Field(() => [FilterWhereUniqueInput], {nullable:true})
    @Type(() => FilterWhereUniqueInput)
    delete?: Array<FilterWhereUniqueInput>;

    @Field(() => [FilterWhereUniqueInput], {nullable:true})
    @Type(() => FilterWhereUniqueInput)
    connect?: Array<FilterWhereUniqueInput>;

    @Field(() => [FilterUpdateWithWhereUniqueWithoutCaseInput], {nullable:true})
    @Type(() => FilterUpdateWithWhereUniqueWithoutCaseInput)
    update?: Array<FilterUpdateWithWhereUniqueWithoutCaseInput>;

    @Field(() => [FilterUpdateManyWithWhereWithoutCaseInput], {nullable:true})
    @Type(() => FilterUpdateManyWithWhereWithoutCaseInput)
    updateMany?: Array<FilterUpdateManyWithWhereWithoutCaseInput>;

    @Field(() => [FilterScalarWhereInput], {nullable:true})
    @Type(() => FilterScalarWhereInput)
    deleteMany?: Array<FilterScalarWhereInput>;
}
