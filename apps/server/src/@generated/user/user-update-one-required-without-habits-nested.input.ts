import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutHabitsInput } from './user-create-without-habits.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutHabitsInput } from './user-create-or-connect-without-habits.input';
import { UserUpsertWithoutHabitsInput } from './user-upsert-without-habits.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutHabitsInput } from './user-update-without-habits.input';

@InputType()
export class UserUpdateOneRequiredWithoutHabitsNestedInput {

    @Field(() => UserCreateWithoutHabitsInput, {nullable:true})
    @Type(() => UserCreateWithoutHabitsInput)
    create?: UserCreateWithoutHabitsInput;

    @Field(() => UserCreateOrConnectWithoutHabitsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutHabitsInput)
    connectOrCreate?: UserCreateOrConnectWithoutHabitsInput;

    @Field(() => UserUpsertWithoutHabitsInput, {nullable:true})
    @Type(() => UserUpsertWithoutHabitsInput)
    upsert?: UserUpsertWithoutHabitsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutHabitsInput, {nullable:true})
    @Type(() => UserUpdateWithoutHabitsInput)
    update?: UserUpdateWithoutHabitsInput;
}
