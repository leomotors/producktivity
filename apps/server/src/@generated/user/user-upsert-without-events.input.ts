import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutEventsInput } from './user-update-without-events.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutEventsInput } from './user-create-without-events.input';

@InputType()
export class UserUpsertWithoutEventsInput {

    @Field(() => UserUpdateWithoutEventsInput, {nullable:false})
    @Type(() => UserUpdateWithoutEventsInput)
    update!: UserUpdateWithoutEventsInput;

    @Field(() => UserCreateWithoutEventsInput, {nullable:false})
    @Type(() => UserCreateWithoutEventsInput)
    create!: UserCreateWithoutEventsInput;
}
