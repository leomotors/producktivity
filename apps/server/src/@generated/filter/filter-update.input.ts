import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CaseUpdateOneRequiredWithoutFilterNestedInput } from '../case/case-update-one-required-without-filter-nested.input';
import { FilterDefinitionUpdateOneRequiredWithoutFilterNestedInput } from '../filter-definition/filter-definition-update-one-required-without-filter-nested.input';

@InputType()
export class FilterUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CaseUpdateOneRequiredWithoutFilterNestedInput, {nullable:true})
    case?: CaseUpdateOneRequiredWithoutFilterNestedInput;

    @Field(() => FilterDefinitionUpdateOneRequiredWithoutFilterNestedInput, {nullable:true})
    FilterDefinition?: FilterDefinitionUpdateOneRequiredWithoutFilterNestedInput;
}
