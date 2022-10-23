import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutUserInput } from './task-create-without-user.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutUserInput } from './task-create-or-connect-without-user.input';
import { TaskUpsertWithWhereUniqueWithoutUserInput } from './task-upsert-with-where-unique-without-user.input';
import { TaskCreateManyUserInputEnvelope } from './task-create-many-user-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithWhereUniqueWithoutUserInput } from './task-update-with-where-unique-without-user.input';
import { TaskUpdateManyWithWhereWithoutUserInput } from './task-update-many-with-where-without-user.input';
import { TaskScalarWhereInput } from './task-scalar-where.input';

@InputType()
export class TaskUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [TaskCreateWithoutUserInput], {nullable:true})
    @Type(() => TaskCreateWithoutUserInput)
    create?: Array<TaskCreateWithoutUserInput>;

    @Field(() => [TaskCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutUserInput>;

    @Field(() => [TaskUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => TaskUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<TaskUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => TaskCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyUserInputEnvelope)
    createMany?: TaskCreateManyUserInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    set?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    disconnect?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    delete?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => TaskUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<TaskUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [TaskUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => TaskUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<TaskUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    @Type(() => TaskScalarWhereInput)
    deleteMany?: Array<TaskScalarWhereInput>;
}
