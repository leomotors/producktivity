import { Module } from "@nestjs/common";

import { HabitResolver } from "./habit.resolver";
import { HabitService } from "./habit.service";

@Module({
  providers: [HabitResolver, HabitService],
})
export class HabitModule {}
