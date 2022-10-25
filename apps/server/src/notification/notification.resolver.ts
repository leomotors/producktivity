import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";

import { Notification } from "@generated/notification/notification.model";
import { User } from "@generated/user/user.model";

import { RequireLogin } from "src/auth/auth.decorator";
import { UserContext } from "src/user/user.decorator";

import {
  CreateNotificationArgs,
  NotVisitedReturnType,
  UpdateNotificationArgs,
} from "./notification.dto";
import { NotificationService } from "./notification.service";

@Resolver(() => Notification)
@RequireLogin()
export class NotificationResolver {
  constructor(private readonly service: NotificationService) {}

  @Mutation(() => Notification)
  createNotification(
    @Args() input: CreateNotificationArgs,
    @UserContext() user: User
  ) {
    return this.service.createNotification(input, user);
  }

  @Mutation(() => Notification)
  updateNotification(
    @Args() input: UpdateNotificationArgs,
    @UserContext() user: User
  ) {
    return this.service.updateNotification(input, user);
  }

  @Mutation(() => String)
  deleteNotification(@Args("id") id: string, @UserContext() user: User) {
    return this.service.deleteNotification(id, user);
  }

  @ResolveField(() => NotVisitedReturnType)
  notVisited(@UserContext() user: User) {
    return this.service.notVisited(user);
  }

  @ResolveField(() => User)
  user(@Parent() notification: Notification) {
    return this.service.user(notification);
  }
}
