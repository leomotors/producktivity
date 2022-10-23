import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutHabitsInput } from './user-create-without-habits.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutHabitsInput } from './user-create-or-connect-without-habits.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutHabitsInput {

    @Field(() => UserCreateWithoutHabitsInput, {nullable:true})
    @Type(() => UserCreateWithoutHabitsInput)
    create?: UserCreateWithoutHabitsInput;

    @Field(() => UserCreateOrConnectWithoutHabitsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutHabitsInput)
    connectOrCreate?: UserCreateOrConnectWithoutHabitsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
