import { ForbiddenException, Injectable } from "@nestjs/common";

import { User } from "@generated/user/user.model";

import { PrismaService } from "src/prisma.service";

import { habitArgs } from "./dto/habit.dto";

@Injectable()
export class HabitService {
  constructor(private readonly prisma: PrismaService) {}

  upsertHabit(input: habitArgs, user: User) {
    return this.prisma.habit.upsert({
      where: {
        id: input.id,
      },

      update: {
        name: input.name,
        tags: input.tags,
      },

      create: {
        name: input.name,
        userId: user.id,
        tags: input.tags,
      },
    });
  }

  async deleteHabit(id: string, user: User) {
    const habitOwnerId = (
      await this.prisma.habit.findUniqueOrThrow({
        where: {
          id,
        },
        select: {
          userId: true,
        },
      })
    ).userId;

    if (user.id !== habitOwnerId) {
      throw new ForbiddenException("Error: Not user's task");
    }

    return this.prisma.habit.delete({
      where: {
        id: id,
      },
    });
  }
}
