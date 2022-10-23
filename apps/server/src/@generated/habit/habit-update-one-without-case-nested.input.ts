import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateWithoutCaseInput } from './habit-create-without-case.input';
import { Type } from 'class-transformer';
import { HabitCreateOrConnectWithoutCaseInput } from './habit-create-or-connect-without-case.input';
import { HabitUpsertWithoutCaseInput } from './habit-upsert-without-case.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { HabitUpdateWithoutCaseInput } from './habit-update-without-case.input';

@InputType()
export class HabitUpdateOneWithoutCaseNestedInput {

    @Field(() => HabitCreateWithoutCaseInput, {nullable:true})
    @Type(() => HabitCreateWithoutCaseInput)
    create?: HabitCreateWithoutCaseInput;

    @Field(() => HabitCreateOrConnectWithoutCaseInput, {nullable:true})
    @Type(() => HabitCreateOrConnectWithoutCaseInput)
    connectOrCreate?: HabitCreateOrConnectWithoutCaseInput;

    @Field(() => HabitUpsertWithoutCaseInput, {nullable:true})
    @Type(() => HabitUpsertWithoutCaseInput)
    upsert?: HabitUpsertWithoutCaseInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => HabitWhereUniqueInput, {nullable:true})
    @Type(() => HabitWhereUniqueInput)
    connect?: HabitWhereUniqueInput;

    @Field(() => HabitUpdateWithoutCaseInput, {nullable:true})
    @Type(() => HabitUpdateWithoutCaseInput)
    update?: HabitUpdateWithoutCaseInput;
}
