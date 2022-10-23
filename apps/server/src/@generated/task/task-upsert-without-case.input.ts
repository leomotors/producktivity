import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskUpdateWithoutCaseInput } from './task-update-without-case.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutCaseInput } from './task-create-without-case.input';

@InputType()
export class TaskUpsertWithoutCaseInput {

    @Field(() => TaskUpdateWithoutCaseInput, {nullable:false})
    @Type(() => TaskUpdateWithoutCaseInput)
    update!: TaskUpdateWithoutCaseInput;

    @Field(() => TaskCreateWithoutCaseInput, {nullable:false})
    @Type(() => TaskCreateWithoutCaseInput)
    create!: TaskCreateWithoutCaseInput;
}
