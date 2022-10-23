import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticatorUncheckedCreateNestedManyWithoutUserInput } from '../authenticator/authenticator-unchecked-create-nested-many-without-user.input';
import { ChallengeUncheckedCreateNestedOneWithoutUserInput } from '../challenge/challenge-unchecked-create-nested-one-without-user.input';
import { NotificationUncheckedCreateNestedManyWithoutUserInput } from '../notification/notification-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutCaseInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => Boolean, {nullable:true})
    registered?: boolean;

    @Field(() => AuthenticatorUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    authenticators?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ChallengeUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    challenge?: ChallengeUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => NotificationUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput;
}
