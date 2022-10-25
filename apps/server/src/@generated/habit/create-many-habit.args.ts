import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitCreateManyInput } from './habit-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyHabitArgs {

    @Field(() => [HabitCreateManyInput], {nullable:false})
    @Type(() => HabitCreateManyInput)
    data!: Array<HabitCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
