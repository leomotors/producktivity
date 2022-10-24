import {
  Args,
  Mutation,
  Parent,
  Query,
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
  FindManyEventArgs,
  UpdateEventArgs,
} from "./event.dto";
import { EventService } from "./event.service";

@Resolver(() => Event)
@RequireLogin()
export class EventResolver {
  constructor(private readonly service: EventService) {}

  @Query(() => Event)
  event(@Args("id") args: string) {
    return this.service.event(args);
  }

  @Query(() => [Event])
  events(@Args() args: FindManyEventArgs) {
    return this.service.events(args);
  }

  @Mutation(() => Event)
  createEvent(@Args() args: CreateEventArgs, @UserContext() user: User) {
    return this.service.createEvent(args, user);
  }

  @Mutation(() => Event)
  updateEvent(@Args() args: UpdateEventArgs, @UserContext() user: User) {
    return this.service.updateEvent(args, user);
  }

  @Mutation(() => DeleteEventReturnType)
  deleteEvent(@Args("id") args: string, @UserContext() user: User) {
    return this.service.deleteEvent(args, user);
  }

  @ResolveField(() => User)
  user(@Parent() event: Event) {
    return this.service.user(event);
  }
}
