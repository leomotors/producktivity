import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengeCreateNestedOneWithoutUserInput } from '../challenge/challenge-create-nested-one-without-user.input';
import { TaskCreateNestedManyWithoutUserInput } from '../task/task-create-nested-many-without-user.input';
import { EventCreateNestedManyWithoutUserInput } from '../event/event-create-nested-many-without-user.input';
import { HabitCreateNestedManyWithoutUserInput } from '../habit/habit-create-nested-many-without-user.input';
import { NotificationCreateNestedManyWithoutUserInput } from '../notification/notification-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutAuthenticatorsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => Boolean, {nullable:true})
    registered?: boolean;

    @Field(() => ChallengeCreateNestedOneWithoutUserInput, {nullable:true})
    challenge?: ChallengeCreateNestedOneWithoutUserInput;

    @Field(() => TaskCreateNestedManyWithoutUserInput, {nullable:true})
    tasks?: TaskCreateNestedManyWithoutUserInput;

    @Field(() => EventCreateNestedManyWithoutUserInput, {nullable:true})
    events?: EventCreateNestedManyWithoutUserInput;

    @Field(() => HabitCreateNestedManyWithoutUserInput, {nullable:true})
    habits?: HabitCreateNestedManyWithoutUserInput;

    @Field(() => NotificationCreateNestedManyWithoutUserInput, {nullable:true})
    notifications?: NotificationCreateNestedManyWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
