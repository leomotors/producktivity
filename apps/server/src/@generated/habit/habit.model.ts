import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Habit {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [String], {nullable:true})
    tags!: Array<string>;

    @Field(() => Int, {nullable:true})
    currentCount!: number | null;

    @Field(() => Int, {nullable:true})
    targetCount!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => String, {nullable:false})
    userId!: string;
}
