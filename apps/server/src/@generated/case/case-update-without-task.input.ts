import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutCaseNestedInput } from '../user/user-update-one-required-without-case-nested.input';
import { EventUpdateOneWithoutCaseNestedInput } from '../event/event-update-one-without-case-nested.input';
import { HabitUpdateOneWithoutCaseNestedInput } from '../habit/habit-update-one-without-case-nested.input';
import { FilterUpdateManyWithoutCaseNestedInput } from '../filter/filter-update-many-without-case-nested.input';

@InputType()
export class CaseUpdateWithoutTaskInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutCaseNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutCaseNestedInput;

    @Field(() => EventUpdateOneWithoutCaseNestedInput, {nullable:true})
    event?: EventUpdateOneWithoutCaseNestedInput;

    @Field(() => HabitUpdateOneWithoutCaseNestedInput, {nullable:true})
    habit?: HabitUpdateOneWithoutCaseNestedInput;

    @Field(() => FilterUpdateManyWithoutCaseNestedInput, {nullable:true})
    filter?: FilterUpdateManyWithoutCaseNestedInput;
}
