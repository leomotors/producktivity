import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateWithoutUserInput } from './habit-create-without-user.input';
import { Type } from 'class-transformer';
import { HabitCreateOrConnectWithoutUserInput } from './habit-create-or-connect-without-user.input';
import { HabitCreateManyUserInputEnvelope } from './habit-create-many-user-input-envelope.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';

@InputType()
export class HabitCreateNestedManyWithoutUserInput {

    @Field(() => [HabitCreateWithoutUserInput], {nullable:true})
    @Type(() => HabitCreateWithoutUserInput)
    create?: Array<HabitCreateWithoutUserInput>;

    @Field(() => [HabitCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => HabitCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<HabitCreateOrConnectWithoutUserInput>;

    @Field(() => HabitCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => HabitCreateManyUserInputEnvelope)
    createMany?: HabitCreateManyUserInputEnvelope;

    @Field(() => [HabitWhereUniqueInput], {nullable:true})
    @Type(() => HabitWhereUniqueInput)
    connect?: Array<HabitWhereUniqueInput>;
}
