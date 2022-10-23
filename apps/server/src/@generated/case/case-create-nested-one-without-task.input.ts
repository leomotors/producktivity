import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseCreateWithoutTaskInput } from './case-create-without-task.input';
import { Type } from 'class-transformer';
import { CaseCreateOrConnectWithoutTaskInput } from './case-create-or-connect-without-task.input';
import { CaseWhereUniqueInput } from './case-where-unique.input';

@InputType()
export class CaseCreateNestedOneWithoutTaskInput {

    @Field(() => CaseCreateWithoutTaskInput, {nullable:true})
    @Type(() => CaseCreateWithoutTaskInput)
    create?: CaseCreateWithoutTaskInput;

    @Field(() => CaseCreateOrConnectWithoutTaskInput, {nullable:true})
    @Type(() => CaseCreateOrConnectWithoutTaskInput)
    connectOrCreate?: CaseCreateOrConnectWithoutTaskInput;

    @Field(() => CaseWhereUniqueInput, {nullable:true})
    @Type(() => CaseWhereUniqueInput)
    connect?: CaseWhereUniqueInput;
}
