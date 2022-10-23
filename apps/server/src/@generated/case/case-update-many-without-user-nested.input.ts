import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseCreateWithoutUserInput } from './case-create-without-user.input';
import { Type } from 'class-transformer';
import { CaseCreateOrConnectWithoutUserInput } from './case-create-or-connect-without-user.input';
import { CaseUpsertWithWhereUniqueWithoutUserInput } from './case-upsert-with-where-unique-without-user.input';
import { CaseCreateManyUserInputEnvelope } from './case-create-many-user-input-envelope.input';
import { CaseWhereUniqueInput } from './case-where-unique.input';
import { CaseUpdateWithWhereUniqueWithoutUserInput } from './case-update-with-where-unique-without-user.input';
import { CaseUpdateManyWithWhereWithoutUserInput } from './case-update-many-with-where-without-user.input';
import { CaseScalarWhereInput } from './case-scalar-where.input';

@InputType()
export class CaseUpdateManyWithoutUserNestedInput {

    @Field(() => [CaseCreateWithoutUserInput], {nullable:true})
    @Type(() => CaseCreateWithoutUserInput)
    create?: Array<CaseCreateWithoutUserInput>;

    @Field(() => [CaseCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CaseCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CaseCreateOrConnectWithoutUserInput>;

    @Field(() => [CaseUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CaseUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<CaseUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => CaseCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CaseCreateManyUserInputEnvelope)
    createMany?: CaseCreateManyUserInputEnvelope;

    @Field(() => [CaseWhereUniqueInput], {nullable:true})
    @Type(() => CaseWhereUniqueInput)
    set?: Array<CaseWhereUniqueInput>;

    @Field(() => [CaseWhereUniqueInput], {nullable:true})
    @Type(() => CaseWhereUniqueInput)
    disconnect?: Array<CaseWhereUniqueInput>;

    @Field(() => [CaseWhereUniqueInput], {nullable:true})
    @Type(() => CaseWhereUniqueInput)
    delete?: Array<CaseWhereUniqueInput>;

    @Field(() => [CaseWhereUniqueInput], {nullable:true})
    @Type(() => CaseWhereUniqueInput)
    connect?: Array<CaseWhereUniqueInput>;

    @Field(() => [CaseUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CaseUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<CaseUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [CaseUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => CaseUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<CaseUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [CaseScalarWhereInput], {nullable:true})
    @Type(() => CaseScalarWhereInput)
    deleteMany?: Array<CaseScalarWhereInput>;
}
