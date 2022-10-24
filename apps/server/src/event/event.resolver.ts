import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";

import { Event } from "@generated/event/event.model";
import { User } from "@generated/user/user.model";

import { RequireLogin } from "src/auth/auth.decorator";
import { UserContext } from "src/user/user.decorator";

import {
  CreateEventArgs,
  DeleteEventReturnType,
  UpdateEventArgs,
} from "./event.dto";
import { EventService } from "./event.service";

@Resolver(() => Event)
export class EventResolver {
  constructor(private readonly service: EventService) {}

  @Mutation(() => Event)
  @RequireLogin()
  createEvent(@Args() args: CreateEventArgs, @UserContext() user: User) {
    return this.service.createEvent(args, user);
  }

  @Mutation(() => Event)
  @RequireLogin()
  updateEvent(@Args() args: UpdateEventArgs, @UserContext() user: User) {
    return this.service.updateEvent(args, user);
  }

  @Mutation(() => DeleteEventReturnType)
  @RequireLogin()
  deleteEvent(@Args("id") args: string, @UserContext() user: User) {
    return this.service.deleteEvent(args, user);
  }

  @ResolveField(() => User)
  user(@Parent() event: Event) {
    return this.service.user(event);
  }
}
