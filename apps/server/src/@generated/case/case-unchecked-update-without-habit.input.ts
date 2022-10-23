import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TaskUncheckedUpdateOneWithoutCaseNestedInput } from '../task/task-unchecked-update-one-without-case-nested.input';
import { EventUncheckedUpdateOneWithoutCaseNestedInput } from '../event/event-unchecked-update-one-without-case-nested.input';
import { FilterUncheckedUpdateManyWithoutCaseNestedInput } from '../filter/filter-unchecked-update-many-without-case-nested.input';

@InputType()
export class CaseUncheckedUpdateWithoutHabitInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: StringFieldUpdateOperationsInput;

    @Field(() => TaskUncheckedUpdateOneWithoutCaseNestedInput, {nullable:true})
    task?: TaskUncheckedUpdateOneWithoutCaseNestedInput;

    @Field(() => EventUncheckedUpdateOneWithoutCaseNestedInput, {nullable:true})
    event?: EventUncheckedUpdateOneWithoutCaseNestedInput;

    @Field(() => FilterUncheckedUpdateManyWithoutCaseNestedInput, {nullable:true})
    filter?: FilterUncheckedUpdateManyWithoutCaseNestedInput;
}
