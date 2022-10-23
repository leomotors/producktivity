import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCaseInput } from '../user/user-create-nested-one-without-case.input';
import { TaskCreateNestedOneWithoutCaseInput } from '../task/task-create-nested-one-without-case.input';
import { EventCreateNestedOneWithoutCaseInput } from '../event/event-create-nested-one-without-case.input';
import { FilterCreateNestedManyWithoutCaseInput } from '../filter/filter-create-nested-many-without-case.input';

@InputType()
export class CaseCreateWithoutHabitInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:false})
    updateAt!: Date | string;

    @Field(() => UserCreateNestedOneWithoutCaseInput, {nullable:false})
    user!: UserCreateNestedOneWithoutCaseInput;

    @Field(() => TaskCreateNestedOneWithoutCaseInput, {nullable:true})
    task?: TaskCreateNestedOneWithoutCaseInput;

    @Field(() => EventCreateNestedOneWithoutCaseInput, {nullable:true})
    event?: EventCreateNestedOneWithoutCaseInput;

    @Field(() => FilterCreateNestedManyWithoutCaseInput, {nullable:true})
    filter?: FilterCreateNestedManyWithoutCaseInput;
}
