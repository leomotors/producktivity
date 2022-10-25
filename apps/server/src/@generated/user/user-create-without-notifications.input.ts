import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticatorCreateNestedManyWithoutUserInput } from '../authenticator/authenticator-create-nested-many-without-user.input';
import { ChallengeCreateNestedOneWithoutUserInput } from '../challenge/challenge-create-nested-one-without-user.input';
import { TaskCreateNestedManyWithoutUserInput } from '../task/task-create-nested-many-without-user.input';
import { EventCreateNestedManyWithoutUserInput } from '../event/event-create-nested-many-without-user.input';
import { HabitCreateNestedManyWithoutUserInput } from '../habit/habit-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutNotificationsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => Boolean, {nullable:true})
    registered?: boolean;

    @Field(() => AuthenticatorCreateNestedManyWithoutUserInput, {nullable:true})
    authenticators?: AuthenticatorCreateNestedManyWithoutUserInput;

    @Field(() => ChallengeCreateNestedOneWithoutUserInput, {nullable:true})
    challenge?: ChallengeCreateNestedOneWithoutUserInput;

    @Field(() => TaskCreateNestedManyWithoutUserInput, {nullable:true})
    tasks?: TaskCreateNestedManyWithoutUserInput;

    @Field(() => EventCreateNestedManyWithoutUserInput, {nullable:true})
    events?: EventCreateNestedManyWithoutUserInput;

    @Field(() => HabitCreateNestedManyWithoutUserInput, {nullable:true})
    habits?: HabitCreateNestedManyWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
