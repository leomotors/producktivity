import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseCreateWithoutEventInput } from './case-create-without-event.input';
import { Type } from 'class-transformer';
import { CaseCreateOrConnectWithoutEventInput } from './case-create-or-connect-without-event.input';
import { CaseWhereUniqueInput } from './case-where-unique.input';

@InputType()
export class CaseCreateNestedOneWithoutEventInput {

    @Field(() => CaseCreateWithoutEventInput, {nullable:true})
    @Type(() => CaseCreateWithoutEventInput)
    create?: CaseCreateWithoutEventInput;

    @Field(() => CaseCreateOrConnectWithoutEventInput, {nullable:true})
    @Type(() => CaseCreateOrConnectWithoutEventInput)
    connectOrCreate?: CaseCreateOrConnectWithoutEventInput;

    @Field(() => CaseWhereUniqueInput, {nullable:true})
    @Type(() => CaseWhereUniqueInput)
    connect?: CaseWhereUniqueInput;
}
