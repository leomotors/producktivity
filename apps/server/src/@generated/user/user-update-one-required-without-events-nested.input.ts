import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEventsInput } from './user-create-without-events.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutEventsInput } from './user-create-or-connect-without-events.input';
import { UserUpsertWithoutEventsInput } from './user-upsert-without-events.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutEventsInput } from './user-update-without-events.input';

@InputType()
export class UserUpdateOneRequiredWithoutEventsNestedInput {

    @Field(() => UserCreateWithoutEventsInput, {nullable:true})
    @Type(() => UserCreateWithoutEventsInput)
    create?: UserCreateWithoutEventsInput;

    @Field(() => UserCreateOrConnectWithoutEventsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutEventsInput)
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput;

    @Field(() => UserUpsertWithoutEventsInput, {nullable:true})
    @Type(() => UserUpsertWithoutEventsInput)
    upsert?: UserUpsertWithoutEventsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutEventsInput, {nullable:true})
    @Type(() => UserUpdateWithoutEventsInput)
    update?: UserUpdateWithoutEventsInput;
}
