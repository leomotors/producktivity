import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CaseUpdateOneRequiredWithoutHabitNestedInput } from '../case/case-update-one-required-without-habit-nested.input';

@InputType()
export class HabitUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => CaseUpdateOneRequiredWithoutHabitNestedInput, {nullable:true})
    case?: CaseUpdateOneRequiredWithoutHabitNestedInput;
}
