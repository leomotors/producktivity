import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutUserInput } from './task-create-without-user.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutUserInput } from './task-create-or-connect-without-user.input';
import { TaskCreateManyUserInputEnvelope } from './task-create-many-user-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [TaskCreateWithoutUserInput], {nullable:true})
    @Type(() => TaskCreateWithoutUserInput)
    create?: Array<TaskCreateWithoutUserInput>;

    @Field(() => [TaskCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutUserInput>;

    @Field(() => TaskCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyUserInputEnvelope)
    createMany?: TaskCreateManyUserInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Array<TaskWhereUniqueInput>;
}
