import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseCreateNestedOneWithoutTaskInput } from '../case/case-create-nested-one-without-task.input';

@InputType()
export class TaskCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:false})
    due_date!: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:false})
    updateAt!: Date | string;

    @Field(() => Boolean, {nullable:true})
    isCompleted?: boolean;

    @Field(() => CaseCreateNestedOneWithoutTaskInput, {nullable:false})
    case!: CaseCreateNestedOneWithoutTaskInput;
}
