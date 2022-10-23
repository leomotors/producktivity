import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseCreateNestedOneWithoutHabitInput } from '../case/case-create-nested-one-without-habit.input';

@InputType()
export class HabitCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:false})
    updateAt!: Date | string;

    @Field(() => CaseCreateNestedOneWithoutHabitInput, {nullable:false})
    case!: CaseCreateNestedOneWithoutHabitInput;
}
