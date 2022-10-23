import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreatetagsInput } from './event-createtags.input';
import { UserCreateNestedOneWithoutEventsInput } from '../user/user-create-nested-one-without-events.input';

@InputType()
export class EventCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:false})
    dueDate!: Date | string;

    @Field(() => EventCreatetagsInput, {nullable:true})
    tags?: EventCreatetagsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutEventsInput, {nullable:false})
    User!: UserCreateNestedOneWithoutEventsInput;
}
