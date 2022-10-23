import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateWithoutUserInput } from './habit-create-without-user.input';
import { Type } from 'class-transformer';
import { HabitCreateOrConnectWithoutUserInput } from './habit-create-or-connect-without-user.input';
import { HabitUpsertWithWhereUniqueWithoutUserInput } from './habit-upsert-with-where-unique-without-user.input';
import { HabitCreateManyUserInputEnvelope } from './habit-create-many-user-input-envelope.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { HabitUpdateWithWhereUniqueWithoutUserInput } from './habit-update-with-where-unique-without-user.input';
import { HabitUpdateManyWithWhereWithoutUserInput } from './habit-update-many-with-where-without-user.input';
import { HabitScalarWhereInput } from './habit-scalar-where.input';

@InputType()
export class HabitUpdateManyWithoutUserNestedInput {

    @Field(() => [HabitCreateWithoutUserInput], {nullable:true})
    @Type(() => HabitCreateWithoutUserInput)
    create?: Array<HabitCreateWithoutUserInput>;

    @Field(() => [HabitCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => HabitCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<HabitCreateOrConnectWithoutUserInput>;

    @Field(() => [HabitUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => HabitUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<HabitUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => HabitCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => HabitCreateManyUserInputEnvelope)
    createMany?: HabitCreateManyUserInputEnvelope;

    @Field(() => [HabitWhereUniqueInput], {nullable:true})
    @Type(() => HabitWhereUniqueInput)
    set?: Array<HabitWhereUniqueInput>;

    @Field(() => [HabitWhereUniqueInput], {nullable:true})
    @Type(() => HabitWhereUniqueInput)
    disconnect?: Array<HabitWhereUniqueInput>;

    @Field(() => [HabitWhereUniqueInput], {nullable:true})
    @Type(() => HabitWhereUniqueInput)
    delete?: Array<HabitWhereUniqueInput>;

    @Field(() => [HabitWhereUniqueInput], {nullable:true})
    @Type(() => HabitWhereUniqueInput)
    connect?: Array<HabitWhereUniqueInput>;

    @Field(() => [HabitUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => HabitUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<HabitUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [HabitUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => HabitUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<HabitUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [HabitScalarWhereInput], {nullable:true})
    @Type(() => HabitScalarWhereInput)
    deleteMany?: Array<HabitScalarWhereInput>;
}
