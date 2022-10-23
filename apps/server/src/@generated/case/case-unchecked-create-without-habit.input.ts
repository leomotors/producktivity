import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskUncheckedCreateNestedOneWithoutCaseInput } from '../task/task-unchecked-create-nested-one-without-case.input';
import { EventUncheckedCreateNestedOneWithoutCaseInput } from '../event/event-unchecked-create-nested-one-without-case.input';
import { FilterUncheckedCreateNestedManyWithoutCaseInput } from '../filter/filter-unchecked-create-nested-many-without-case.input';

@InputType()
export class CaseUncheckedCreateWithoutHabitInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:false})
    updateAt!: Date | string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => TaskUncheckedCreateNestedOneWithoutCaseInput, {nullable:true})
    task?: TaskUncheckedCreateNestedOneWithoutCaseInput;

    @Field(() => EventUncheckedCreateNestedOneWithoutCaseInput, {nullable:true})
    event?: EventUncheckedCreateNestedOneWithoutCaseInput;

    @Field(() => FilterUncheckedCreateNestedManyWithoutCaseInput, {nullable:true})
    filter?: FilterUncheckedCreateNestedManyWithoutCaseInput;
}
