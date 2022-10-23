import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { AuthenticatorUpdateManyWithoutUserNestedInput } from '../authenticator/authenticator-update-many-without-user-nested.input';
import { ChallengeUpdateOneWithoutUserNestedInput } from '../challenge/challenge-update-one-without-user-nested.input';
import { TaskUpdateManyWithoutUserNestedInput } from '../task/task-update-many-without-user-nested.input';
import { EventUpdateManyWithoutUserNestedInput } from '../event/event-update-many-without-user-nested.input';
import { HabitUpdateManyWithoutUserNestedInput } from '../habit/habit-update-many-without-user-nested.input';
import { NotificationUpdateManyWithoutUserNestedInput } from '../notification/notification-update-many-without-user-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class UserUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    registered?: BoolFieldUpdateOperationsInput;

    @Field(() => AuthenticatorUpdateManyWithoutUserNestedInput, {nullable:true})
    authenticators?: AuthenticatorUpdateManyWithoutUserNestedInput;

    @Field(() => ChallengeUpdateOneWithoutUserNestedInput, {nullable:true})
    challenge?: ChallengeUpdateOneWithoutUserNestedInput;

    @Field(() => TaskUpdateManyWithoutUserNestedInput, {nullable:true})
    tasks?: TaskUpdateManyWithoutUserNestedInput;

    @Field(() => EventUpdateManyWithoutUserNestedInput, {nullable:true})
    events?: EventUpdateManyWithoutUserNestedInput;

    @Field(() => HabitUpdateManyWithoutUserNestedInput, {nullable:true})
    habits?: HabitUpdateManyWithoutUserNestedInput;

    @Field(() => NotificationUpdateManyWithoutUserNestedInput, {nullable:true})
    notifications?: NotificationUpdateManyWithoutUserNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
