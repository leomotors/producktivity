import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreatetagsInput } from './habit-createtags.input';

@InputType()
export class HabitCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => HabitCreatetagsInput, {nullable:true})
    tags?: HabitCreatetagsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    userId!: string;
}
