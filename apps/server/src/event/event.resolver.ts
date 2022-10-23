import { Args, Mutation, Resolver } from "@nestjs/graphql";

import { Event } from "@generated/event/event.model";

// import { CreateOneEventArgs } from "@generated/event/create-one-event.args";
import { EventArgs } from "src/event/event.dto";

import { EventService } from "./event.service";

// import { UserContext }

@Resolver(() => Event)
export class EventResolver {
  constructor(private readonly service: EventService) {}

  @Mutation(() => Event)
  createEvent(@Args() args: EventArgs) {
    return this.service.createEvent(args);
  }
}
