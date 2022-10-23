import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutCaseInput } from './task-create-without-case.input';

@InputType()
export class TaskCreateOrConnectWithoutCaseInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutCaseInput, {nullable:false})
    @Type(() => TaskCreateWithoutCaseInput)
    create!: TaskCreateWithoutCaseInput;
}
