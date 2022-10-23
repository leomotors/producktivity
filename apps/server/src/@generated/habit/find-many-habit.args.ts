import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitWhereInput } from './habit-where.input';
import { Type } from 'class-transformer';
import { HabitOrderByWithRelationInput } from './habit-order-by-with-relation.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HabitScalarFieldEnum } from './habit-scalar-field.enum';

@ArgsType()
export class FindManyHabitArgs {

    @Field(() => HabitWhereInput, {nullable:true})
    @Type(() => HabitWhereInput)
    where?: HabitWhereInput;

    @Field(() => [HabitOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HabitOrderByWithRelationInput>;

    @Field(() => HabitWhereUniqueInput, {nullable:true})
    cursor?: HabitWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [HabitScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HabitScalarFieldEnum>;
}
