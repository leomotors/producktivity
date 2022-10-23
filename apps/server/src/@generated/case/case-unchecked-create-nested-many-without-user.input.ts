import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseCreateWithoutUserInput } from './case-create-without-user.input';
import { Type } from 'class-transformer';
import { CaseCreateOrConnectWithoutUserInput } from './case-create-or-connect-without-user.input';
import { CaseCreateManyUserInputEnvelope } from './case-create-many-user-input-envelope.input';
import { CaseWhereUniqueInput } from './case-where-unique.input';

@InputType()
export class CaseUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [CaseCreateWithoutUserInput], {nullable:true})
    @Type(() => CaseCreateWithoutUserInput)
    create?: Array<CaseCreateWithoutUserInput>;

    @Field(() => [CaseCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CaseCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CaseCreateOrConnectWithoutUserInput>;

    @Field(() => CaseCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CaseCreateManyUserInputEnvelope)
    createMany?: CaseCreateManyUserInputEnvelope;

    @Field(() => [CaseWhereUniqueInput], {nullable:true})
    @Type(() => CaseWhereUniqueInput)
    connect?: Array<CaseWhereUniqueInput>;
}
