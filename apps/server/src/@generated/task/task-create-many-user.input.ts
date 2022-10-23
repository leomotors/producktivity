import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreatetagsInput } from './task-createtags.input';

@InputType()
export class TaskCreateManyUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    dueDate!: Date | string;

    @Field(() => Boolean, {nullable:true})
    isCompleted?: boolean;

    @Field(() => TaskCreatetagsInput, {nullable:true})
    tags?: TaskCreatetagsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
