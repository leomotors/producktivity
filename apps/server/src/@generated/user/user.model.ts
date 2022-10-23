import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Authenticator } from '../authenticator/authenticator.model';
import { Challenge } from '../challenge/challenge.model';
import { Case } from '../case/case.model';
import { Notification } from '../notification/notification.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    registered!: boolean;

    @Field(() => [Authenticator], {nullable:true})
    authenticators?: Array<Authenticator>;

    @Field(() => Challenge, {nullable:true})
    challenge?: Challenge | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Case], {nullable:true})
    case?: Array<Case>;

    @Field(() => [Notification], {nullable:true})
    notification?: Array<Notification>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
