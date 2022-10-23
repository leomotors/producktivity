import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutHabitsInput } from './user-create-without-habits.input';

@InputType()
export class UserCreateOrConnectWithoutHabitsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutHabitsInput, {nullable:false})
    @Type(() => UserCreateWithoutHabitsInput)
    create!: UserCreateWithoutHabitsInput;
}
