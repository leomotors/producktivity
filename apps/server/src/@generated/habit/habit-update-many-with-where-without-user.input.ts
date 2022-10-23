import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitScalarWhereInput } from './habit-scalar-where.input';
import { Type } from 'class-transformer';
import { HabitUpdateManyMutationInput } from './habit-update-many-mutation.input';

@InputType()
export class HabitUpdateManyWithWhereWithoutUserInput {

    @Field(() => HabitScalarWhereInput, {nullable:false})
    @Type(() => HabitScalarWhereInput)
    where!: HabitScalarWhereInput;

    @Field(() => HabitUpdateManyMutationInput, {nullable:false})
    @Type(() => HabitUpdateManyMutationInput)
    data!: HabitUpdateManyMutationInput;
}
