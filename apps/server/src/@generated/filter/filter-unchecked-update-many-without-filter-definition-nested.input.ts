import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilterCreateWithoutFilterDefinitionInput } from './filter-create-without-filter-definition.input';
import { Type } from 'class-transformer';
import { FilterCreateOrConnectWithoutFilterDefinitionInput } from './filter-create-or-connect-without-filter-definition.input';
import { FilterUpsertWithWhereUniqueWithoutFilterDefinitionInput } from './filter-upsert-with-where-unique-without-filter-definition.input';
import { FilterCreateManyFilterDefinitionInputEnvelope } from './filter-create-many-filter-definition-input-envelope.input';
import { FilterWhereUniqueInput } from './filter-where-unique.input';
import { FilterUpdateWithWhereUniqueWithoutFilterDefinitionInput } from './filter-update-with-where-unique-without-filter-definition.input';
import { FilterUpdateManyWithWhereWithoutFilterDefinitionInput } from './filter-update-many-with-where-without-filter-definition.input';
import { FilterScalarWhereInput } from './filter-scalar-where.input';

@InputType()
export class FilterUncheckedUpdateManyWithoutFilterDefinitionNestedInput {

    @Field(() => [FilterCreateWithoutFilterDefinitionInput], {nullable:true})
    @Type(() => FilterCreateWithoutFilterDefinitionInput)
    create?: Array<FilterCreateWithoutFilterDefinitionInput>;

    @Field(() => [FilterCreateOrConnectWithoutFilterDefinitionInput], {nullable:true})
    @Type(() => FilterCreateOrConnectWithoutFilterDefinitionInput)
    connectOrCreate?: Array<FilterCreateOrConnectWithoutFilterDefinitionInput>;

    @Field(() => [FilterUpsertWithWhereUniqueWithoutFilterDefinitionInput], {nullable:true})
    @Type(() => FilterUpsertWithWhereUniqueWithoutFilterDefinitionInput)
    upsert?: Array<FilterUpsertWithWhereUniqueWithoutFilterDefinitionInput>;

    @Field(() => FilterCreateManyFilterDefinitionInputEnvelope, {nullable:true})
    @Type(() => FilterCreateManyFilterDefinitionInputEnvelope)
    createMany?: FilterCreateManyFilterDefinitionInputEnvelope;

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

    @Field(() => [FilterUpdateWithWhereUniqueWithoutFilterDefinitionInput], {nullable:true})
    @Type(() => FilterUpdateWithWhereUniqueWithoutFilterDefinitionInput)
    update?: Array<FilterUpdateWithWhereUniqueWithoutFilterDefinitionInput>;

    @Field(() => [FilterUpdateManyWithWhereWithoutFilterDefinitionInput], {nullable:true})
    @Type(() => FilterUpdateManyWithWhereWithoutFilterDefinitionInput)
    updateMany?: Array<FilterUpdateManyWithWhereWithoutFilterDefinitionInput>;

    @Field(() => [FilterScalarWhereInput], {nullable:true})
    @Type(() => FilterScalarWhereInput)
    deleteMany?: Array<FilterScalarWhereInput>;
}
