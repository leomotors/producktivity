import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateWithoutCaseInput } from './habit-create-without-case.input';
import { Type } from 'class-transformer';
import { HabitCreateOrConnectWithoutCaseInput } from './habit-create-or-connect-without-case.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';

@InputType()
export class HabitCreateNestedOneWithoutCaseInput {

    @Field(() => HabitCreateWithoutCaseInput, {nullable:true})
    @Type(() => HabitCreateWithoutCaseInput)
    create?: HabitCreateWithoutCaseInput;

    @Field(() => HabitCreateOrConnectWithoutCaseInput, {nullable:true})
    @Type(() => HabitCreateOrConnectWithoutCaseInput)
    connectOrCreate?: HabitCreateOrConnectWithoutCaseInput;

    @Field(() => HabitWhereUniqueInput, {nullable:true})
    @Type(() => HabitWhereUniqueInput)
    connect?: HabitWhereUniqueInput;
}
