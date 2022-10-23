import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutCaseInput } from './task-create-without-case.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutCaseInput } from './task-create-or-connect-without-case.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskCreateNestedOneWithoutCaseInput {

    @Field(() => TaskCreateWithoutCaseInput, {nullable:true})
    @Type(() => TaskCreateWithoutCaseInput)
    create?: TaskCreateWithoutCaseInput;

    @Field(() => TaskCreateOrConnectWithoutCaseInput, {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutCaseInput)
    connectOrCreate?: TaskCreateOrConnectWithoutCaseInput;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: TaskWhereUniqueInput;
}
