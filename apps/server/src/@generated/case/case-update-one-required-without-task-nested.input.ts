import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseCreateWithoutTaskInput } from './case-create-without-task.input';
import { Type } from 'class-transformer';
import { CaseCreateOrConnectWithoutTaskInput } from './case-create-or-connect-without-task.input';
import { CaseUpsertWithoutTaskInput } from './case-upsert-without-task.input';
import { CaseWhereUniqueInput } from './case-where-unique.input';
import { CaseUpdateWithoutTaskInput } from './case-update-without-task.input';

@InputType()
export class CaseUpdateOneRequiredWithoutTaskNestedInput {

    @Field(() => CaseCreateWithoutTaskInput, {nullable:true})
    @Type(() => CaseCreateWithoutTaskInput)
    create?: CaseCreateWithoutTaskInput;

    @Field(() => CaseCreateOrConnectWithoutTaskInput, {nullable:true})
    @Type(() => CaseCreateOrConnectWithoutTaskInput)
    connectOrCreate?: CaseCreateOrConnectWithoutTaskInput;

    @Field(() => CaseUpsertWithoutTaskInput, {nullable:true})
    @Type(() => CaseUpsertWithoutTaskInput)
    upsert?: CaseUpsertWithoutTaskInput;

    @Field(() => CaseWhereUniqueInput, {nullable:true})
    @Type(() => CaseWhereUniqueInput)
    connect?: CaseWhereUniqueInput;

    @Field(() => CaseUpdateWithoutTaskInput, {nullable:true})
    @Type(() => CaseUpdateWithoutTaskInput)
    update?: CaseUpdateWithoutTaskInput;
}
