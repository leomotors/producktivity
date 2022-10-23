import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilterCreateWithoutFilterDefinitionInput } from './filter-create-without-filter-definition.input';
import { Type } from 'class-transformer';
import { FilterCreateOrConnectWithoutFilterDefinitionInput } from './filter-create-or-connect-without-filter-definition.input';
import { FilterCreateManyFilterDefinitionInputEnvelope } from './filter-create-many-filter-definition-input-envelope.input';
import { FilterWhereUniqueInput } from './filter-where-unique.input';

@InputType()
export class FilterUncheckedCreateNestedManyWithoutFilterDefinitionInput {

    @Field(() => [FilterCreateWithoutFilterDefinitionInput], {nullable:true})
    @Type(() => FilterCreateWithoutFilterDefinitionInput)
    create?: Array<FilterCreateWithoutFilterDefinitionInput>;

    @Field(() => [FilterCreateOrConnectWithoutFilterDefinitionInput], {nullable:true})
    @Type(() => FilterCreateOrConnectWithoutFilterDefinitionInput)
    connectOrCreate?: Array<FilterCreateOrConnectWithoutFilterDefinitionInput>;

    @Field(() => FilterCreateManyFilterDefinitionInputEnvelope, {nullable:true})
    @Type(() => FilterCreateManyFilterDefinitionInputEnvelope)
    createMany?: FilterCreateManyFilterDefinitionInputEnvelope;

    @Field(() => [FilterWhereUniqueInput], {nullable:true})
    @Type(() => FilterWhereUniqueInput)
    connect?: Array<FilterWhereUniqueInput>;
}
