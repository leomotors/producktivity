import { Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";

import { User } from "@generated/user/user.model";

import { RequireLogin } from "src/auth/auth.decorator";

import { UserContext } from "./user.decorator";
import { UserService } from "./user.service";

@Resolver(() => User)
@RequireLogin()
export class UserResolver {
  constructor(private readonly service: UserService) {}

  @Query(() => User)
  me(@UserContext() user: User) {
    return this.service.findByIdOrThrow(user.id);
  }

  @ResolveField()
  authenticators(@Parent() user: User) {
    return this.service.authenticators(user);
  }

  @ResolveField()
  challenge(@Parent() user: User) {
    return this.service.challenge(user);
  }

  @ResolveField()
  tasks(@Parent() user: User) {
    return this.service.tasks(user);
  }

  @ResolveField()
  events(@Parent() user: User) {
    return this.service.events(user);
  }

  @ResolveField()
  habits(@Parent() user: User) {
    return this.service.habits(user);
  }

  @ResolveField()
  notifications(@Parent() user: User) {
    return this.service.notifications(user);
  }

  @ResolveField()
  _count(@Parent() user: User) {
    return this.service._count(user);
  }
}
