import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitCreateInput } from './habit-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneHabitArgs {

    @Field(() => HabitCreateInput, {nullable:false})
    @Type(() => HabitCreateInput)
    data!: HabitCreateInput;
}
