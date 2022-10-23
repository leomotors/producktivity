import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseCreateWithoutHabitInput } from './case-create-without-habit.input';
import { Type } from 'class-transformer';
import { CaseCreateOrConnectWithoutHabitInput } from './case-create-or-connect-without-habit.input';
import { CaseWhereUniqueInput } from './case-where-unique.input';

@InputType()
export class CaseCreateNestedOneWithoutHabitInput {

    @Field(() => CaseCreateWithoutHabitInput, {nullable:true})
    @Type(() => CaseCreateWithoutHabitInput)
    create?: CaseCreateWithoutHabitInput;

    @Field(() => CaseCreateOrConnectWithoutHabitInput, {nullable:true})
    @Type(() => CaseCreateOrConnectWithoutHabitInput)
    connectOrCreate?: CaseCreateOrConnectWithoutHabitInput;

    @Field(() => CaseWhereUniqueInput, {nullable:true})
    @Type(() => CaseWhereUniqueInput)
    connect?: CaseWhereUniqueInput;
}
