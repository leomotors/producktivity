import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutUserInput } from './task-update-without-user.input';

@InputType()
export class TaskUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutUserInput, {nullable:false})
    @Type(() => TaskUpdateWithoutUserInput)
    data!: TaskUpdateWithoutUserInput;
}
