import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutEventsInput } from './user-create-without-events.input';

@InputType()
export class UserCreateOrConnectWithoutEventsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutEventsInput, {nullable:false})
    @Type(() => UserCreateWithoutEventsInput)
    create!: UserCreateWithoutEventsInput;
}
