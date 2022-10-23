import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseCreateWithoutEventInput } from './case-create-without-event.input';
import { Type } from 'class-transformer';
import { CaseCreateOrConnectWithoutEventInput } from './case-create-or-connect-without-event.input';
import { CaseUpsertWithoutEventInput } from './case-upsert-without-event.input';
import { CaseWhereUniqueInput } from './case-where-unique.input';
import { CaseUpdateWithoutEventInput } from './case-update-without-event.input';

@InputType()
export class CaseUpdateOneRequiredWithoutEventNestedInput {

    @Field(() => CaseCreateWithoutEventInput, {nullable:true})
    @Type(() => CaseCreateWithoutEventInput)
    create?: CaseCreateWithoutEventInput;

    @Field(() => CaseCreateOrConnectWithoutEventInput, {nullable:true})
    @Type(() => CaseCreateOrConnectWithoutEventInput)
    connectOrCreate?: CaseCreateOrConnectWithoutEventInput;

    @Field(() => CaseUpsertWithoutEventInput, {nullable:true})
    @Type(() => CaseUpsertWithoutEventInput)
    upsert?: CaseUpsertWithoutEventInput;

    @Field(() => CaseWhereUniqueInput, {nullable:true})
    @Type(() => CaseWhereUniqueInput)
    connect?: CaseWhereUniqueInput;

    @Field(() => CaseUpdateWithoutEventInput, {nullable:true})
    @Type(() => CaseUpdateWithoutEventInput)
    update?: CaseUpdateWithoutEventInput;
}
