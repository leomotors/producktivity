import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEventsInput } from './user-create-without-events.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutEventsInput } from './user-create-or-connect-without-events.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutEventsInput {

    @Field(() => UserCreateWithoutEventsInput, {nullable:true})
    @Type(() => UserCreateWithoutEventsInput)
    create?: UserCreateWithoutEventsInput;

    @Field(() => UserCreateOrConnectWithoutEventsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutEventsInput)
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
