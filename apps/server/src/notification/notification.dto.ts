import { ArgsType, Field, ObjectType } from "@nestjs/graphql";

import { Notification } from "@generated/notification/notification.model";

@ArgsType()
export class CreateNotificationArgs {
  @Field()
  name!: string;

  @Field({ nullable: true })
  description?: string;
}

@ArgsType()
export class UpdateNotificationArgs {
  @Field()
  id!: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  isVisited?: boolean;
}

@ObjectType()
export class NotVisitedReturnType {
  @Field(() => [Notification])
  notifications!: Notification[];
}
