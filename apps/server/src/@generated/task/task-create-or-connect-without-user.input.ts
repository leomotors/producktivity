import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutUserInput } from './task-create-without-user.input';

@InputType()
export class TaskCreateOrConnectWithoutUserInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutUserInput, {nullable:false})
    @Type(() => TaskCreateWithoutUserInput)
    create!: TaskCreateWithoutUserInput;
}
