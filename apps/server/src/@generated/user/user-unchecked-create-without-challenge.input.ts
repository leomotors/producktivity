import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticatorUncheckedCreateNestedManyWithoutUserInput } from '../authenticator/authenticator-unchecked-create-nested-many-without-user.input';
import { CaseUncheckedCreateNestedManyWithoutUserInput } from '../case/case-unchecked-create-nested-many-without-user.input';
import { NotificationUncheckedCreateNestedManyWithoutUserInput } from '../notification/notification-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutChallengeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => Boolean, {nullable:true})
    registered?: boolean;

    @Field(() => AuthenticatorUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    authenticators?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CaseUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    case?: CaseUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => NotificationUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput;
}
