import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskUncheckedCreateNestedOneWithoutCaseInput } from '../task/task-unchecked-create-nested-one-without-case.input';
import { EventUncheckedCreateNestedOneWithoutCaseInput } from '../event/event-unchecked-create-nested-one-without-case.input';
import { HabitUncheckedCreateNestedOneWithoutCaseInput } from '../habit/habit-unchecked-create-nested-one-without-case.input';

@InputType()
export class CaseUncheckedCreateWithoutFilterInput {

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

    @Field(() => HabitUncheckedCreateNestedOneWithoutCaseInput, {nullable:true})
    habit?: HabitUncheckedCreateNestedOneWithoutCaseInput;
}
