import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitUpdateManyMutationInput } from './habit-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HabitWhereInput } from './habit-where.input';

@ArgsType()
export class UpdateManyHabitArgs {

    @Field(() => HabitUpdateManyMutationInput, {nullable:false})
    @Type(() => HabitUpdateManyMutationInput)
    data!: HabitUpdateManyMutationInput;

    @Field(() => HabitWhereInput, {nullable:true})
    @Type(() => HabitWhereInput)
    where?: HabitWhereInput;
}
