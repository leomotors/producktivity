import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseCreateNestedOneWithoutEventInput } from '../case/case-create-nested-one-without-event.input';

@InputType()
export class EventCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:false})
    dueDate!: Date | string;

    @Field(() => CaseCreateNestedOneWithoutEventInput, {nullable:false})
    case!: CaseCreateNestedOneWithoutEventInput;
}
