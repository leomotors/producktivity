import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreatetagsInput } from './task-createtags.input';
import { UserCreateNestedOneWithoutTasksInput } from '../user/user-create-nested-one-without-tasks.input';

@InputType()
export class TaskCreateInput {

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

    @Field(() => UserCreateNestedOneWithoutTasksInput, {nullable:false})
    user!: UserCreateNestedOneWithoutTasksInput;
}
