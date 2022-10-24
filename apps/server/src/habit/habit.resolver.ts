import { Args, Mutation, Resolver } from "@nestjs/graphql";

import { Habit } from "@generated/habit/habit.model";
import { User } from "@generated/user/user.model";

import { RequireLogin } from "src/auth/auth.decorator";
import { UserContext } from "src/user/user.decorator";

import { CreateHabitArgs, UpdateHabitArgs } from "./habit.dto";
import { HabitService } from "./habit.service";

@Resolver(() => Habit)
@RequireLogin()
export class HabitResolver {
  constructor(private readonly service: HabitService) {}

  @Mutation(() => Habit)
  createHabit(@Args() input: CreateHabitArgs, @UserContext() user: User) {
    return this.service.createHabit(input, user);
  }

  @Mutation(() => Habit)
  updateHabit(@Args() input: UpdateHabitArgs, @UserContext() user: User) {
    return this.service.updateHabit(input, user);
  }

  @Mutation(() => Habit)
  deleteHabit(@Args("id") id: string, @UserContext() user: User) {
    return this.service.deleteHabit(id, user);
  }
}
