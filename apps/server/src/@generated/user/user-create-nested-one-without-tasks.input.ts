import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTasksInput } from './user-create-without-tasks.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTasksInput } from './user-create-or-connect-without-tasks.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutTasksInput {

    @Field(() => UserCreateWithoutTasksInput, {nullable:true})
    @Type(() => UserCreateWithoutTasksInput)
    create?: UserCreateWithoutTasksInput;

    @Field(() => UserCreateOrConnectWithoutTasksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTasksInput)
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
