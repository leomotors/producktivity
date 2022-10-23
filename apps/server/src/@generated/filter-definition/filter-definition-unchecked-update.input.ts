import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { FilterUncheckedUpdateManyWithoutFilterDefinitionNestedInput } from '../filter/filter-unchecked-update-many-without-filter-definition-nested.input';

@InputType()
export class FilterDefinitionUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    label?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    order?: IntFieldUpdateOperationsInput;

    @Field(() => FilterUncheckedUpdateManyWithoutFilterDefinitionNestedInput, {nullable:true})
    filter?: FilterUncheckedUpdateManyWithoutFilterDefinitionNestedInput;
}
