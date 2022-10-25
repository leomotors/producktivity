import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateManyUserInput } from './task-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskCreateManyUserInputEnvelope {

    @Field(() => [TaskCreateManyUserInput], {nullable:false})
    @Type(() => TaskCreateManyUserInput)
    data!: Array<TaskCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
