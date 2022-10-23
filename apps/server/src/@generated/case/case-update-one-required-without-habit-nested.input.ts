import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseCreateWithoutHabitInput } from './case-create-without-habit.input';
import { Type } from 'class-transformer';
import { CaseCreateOrConnectWithoutHabitInput } from './case-create-or-connect-without-habit.input';
import { CaseUpsertWithoutHabitInput } from './case-upsert-without-habit.input';
import { CaseWhereUniqueInput } from './case-where-unique.input';
import { CaseUpdateWithoutHabitInput } from './case-update-without-habit.input';

@InputType()
export class CaseUpdateOneRequiredWithoutHabitNestedInput {

    @Field(() => CaseCreateWithoutHabitInput, {nullable:true})
    @Type(() => CaseCreateWithoutHabitInput)
    create?: CaseCreateWithoutHabitInput;

    @Field(() => CaseCreateOrConnectWithoutHabitInput, {nullable:true})
    @Type(() => CaseCreateOrConnectWithoutHabitInput)
    connectOrCreate?: CaseCreateOrConnectWithoutHabitInput;

    @Field(() => CaseUpsertWithoutHabitInput, {nullable:true})
    @Type(() => CaseUpsertWithoutHabitInput)
    upsert?: CaseUpsertWithoutHabitInput;

    @Field(() => CaseWhereUniqueInput, {nullable:true})
    @Type(() => CaseWhereUniqueInput)
    connect?: CaseWhereUniqueInput;

    @Field(() => CaseUpdateWithoutHabitInput, {nullable:true})
    @Type(() => CaseUpdateWithoutHabitInput)
    update?: CaseUpdateWithoutHabitInput;
}
