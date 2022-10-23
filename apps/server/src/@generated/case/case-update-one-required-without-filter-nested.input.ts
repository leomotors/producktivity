import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseCreateWithoutFilterInput } from './case-create-without-filter.input';
import { Type } from 'class-transformer';
import { CaseCreateOrConnectWithoutFilterInput } from './case-create-or-connect-without-filter.input';
import { CaseUpsertWithoutFilterInput } from './case-upsert-without-filter.input';
import { CaseWhereUniqueInput } from './case-where-unique.input';
import { CaseUpdateWithoutFilterInput } from './case-update-without-filter.input';

@InputType()
export class CaseUpdateOneRequiredWithoutFilterNestedInput {

    @Field(() => CaseCreateWithoutFilterInput, {nullable:true})
    @Type(() => CaseCreateWithoutFilterInput)
    create?: CaseCreateWithoutFilterInput;

    @Field(() => CaseCreateOrConnectWithoutFilterInput, {nullable:true})
    @Type(() => CaseCreateOrConnectWithoutFilterInput)
    connectOrCreate?: CaseCreateOrConnectWithoutFilterInput;

    @Field(() => CaseUpsertWithoutFilterInput, {nullable:true})
    @Type(() => CaseUpsertWithoutFilterInput)
    upsert?: CaseUpsertWithoutFilterInput;

    @Field(() => CaseWhereUniqueInput, {nullable:true})
    @Type(() => CaseWhereUniqueInput)
    connect?: CaseWhereUniqueInput;

    @Field(() => CaseUpdateWithoutFilterInput, {nullable:true})
    @Type(() => CaseUpdateWithoutFilterInput)
    update?: CaseUpdateWithoutFilterInput;
}
