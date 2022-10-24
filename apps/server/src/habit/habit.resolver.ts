import { Args, Mutation, Resolver } from "@nestjs/graphql";

import { Habit } from "@generated/habit/habit.model";
import { User } from "@generated/user/user.model";

import { RequireLogin } from "src/auth/auth.decorator";
import { UserContext } from "src/user/user.decorator";

import { habitArgs } from "./dto/habit.dto";
import { HabitService } from "./habit.service";

@Resolver()
export class HabitResolver {
  constructor(private readonly service: HabitService) {}

  @Mutation(() => Habit)
  @RequireLogin()
  upsertHabit(@Args() input: habitArgs, @UserContext() user: User) {
    return this.service.upsertHabit(input, user);
  }

  @Mutation(() => Habit)
  @RequireLogin()
  deleteHabit(@Args("id") id: string, @UserContext() user: User) {
    return this.service.deleteHabit(id, user);
  }
}
