import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitWhereInput } from './habit-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyHabitArgs {

    @Field(() => HabitWhereInput, {nullable:true})
    @Type(() => HabitWhereInput)
    where?: HabitWhereInput;
}
