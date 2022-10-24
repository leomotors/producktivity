import { Args, Mutation, Resolver } from "@nestjs/graphql";

import { Event } from "@generated/event/event.model";
import { User } from "@generated/user/user.model";

import { RequireLogin } from "src/auth/auth.decorator";
import { createEventArgs, updateEventArgs } from "src/event/event.dto";
import { UserContext } from "src/user/user.decorator";

import { EventService } from "./event.service";

@Resolver(() => Event)
export class EventResolver {
  constructor(private readonly service: EventService) {}

  @Mutation(() => Event)
  @RequireLogin()
  createEvent(@Args() args: createEventArgs, @UserContext() user: User) {
    return this.service.createEvent(args, user);
  }

  @Mutation(() => Event)
  @RequireLogin()
  updateEvent(@Args() args: updateEventArgs, @UserContext() user: User) {
    return this.service.updateEvent(args, user);
  }

  @Mutation(() => Event)
  @RequireLogin()
  deleteEvent(@Args("id") args: string, @UserContext() user: User) {
    return this.service.deleteEvent(args, user);
  }
}
