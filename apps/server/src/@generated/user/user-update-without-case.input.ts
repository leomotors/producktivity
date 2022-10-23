import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { AuthenticatorUpdateManyWithoutUserNestedInput } from '../authenticator/authenticator-update-many-without-user-nested.input';
import { ChallengeUpdateOneWithoutUserNestedInput } from '../challenge/challenge-update-one-without-user-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NotificationUpdateManyWithoutUserNestedInput } from '../notification/notification-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutCaseInput {

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

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NotificationUpdateManyWithoutUserNestedInput, {nullable:true})
    notification?: NotificationUpdateManyWithoutUserNestedInput;
}
