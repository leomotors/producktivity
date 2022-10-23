import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateManyUserInput } from './habit-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class HabitCreateManyUserInputEnvelope {

    @Field(() => [HabitCreateManyUserInput], {nullable:false})
    @Type(() => HabitCreateManyUserInput)
    data!: Array<HabitCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
