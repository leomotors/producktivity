import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutCaseInput } from './task-create-without-case.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutCaseInput } from './task-create-or-connect-without-case.input';
import { TaskUpsertWithoutCaseInput } from './task-upsert-without-case.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithoutCaseInput } from './task-update-without-case.input';

@InputType()
export class TaskUncheckedUpdateOneWithoutCaseNestedInput {

    @Field(() => TaskCreateWithoutCaseInput, {nullable:true})
    @Type(() => TaskCreateWithoutCaseInput)
    create?: TaskCreateWithoutCaseInput;

    @Field(() => TaskCreateOrConnectWithoutCaseInput, {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutCaseInput)
    connectOrCreate?: TaskCreateOrConnectWithoutCaseInput;

    @Field(() => TaskUpsertWithoutCaseInput, {nullable:true})
    @Type(() => TaskUpsertWithoutCaseInput)
    upsert?: TaskUpsertWithoutCaseInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutCaseInput, {nullable:true})
    @Type(() => TaskUpdateWithoutCaseInput)
    update?: TaskUpdateWithoutCaseInput;
}
