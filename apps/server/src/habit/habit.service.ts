/* eslint-disable eqeqeq */
import { ForbiddenException, Injectable } from "@nestjs/common";

import { User } from "@generated/user/user.model";

import { PrismaService } from "src/prisma.service";

import { createHabitArgs, updateHabitArgs } from "./dto/habit.dto";

@Injectable()
export class HabitService {
  constructor(private readonly prisma: PrismaService) {}

  createHabit(input: createHabitArgs, user: User) {
    return this.prisma.habit.create({
      data: {
        name: input.name,
        tags: input.tags,
        userId: user.id,
      },
    });
  }

  async updateHabit(input: updateHabitArgs, user: User) {
    const habitOwnerId = (
      await this.prisma.habit.findUniqueOrThrow({
        where: {
          id: input.id,
        },
        select: {
          userId: true,
        },
      })
    ).userId;

    if (user.id !== habitOwnerId) {
      throw new ForbiddenException(
        "Error: Trying tp update other user's habit"
      );
    }

    return this.prisma.habit.update({
      where: {
        id: input.id,
      },
      data: {
        name: input.name != null ? input.name : undefined,
        tags: input.tags != null ? input.tags : undefined,
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
      throw new ForbiddenException("Error: Trying to update other's habit");
    }

    return this.prisma.habit.delete({
      where: {
        id: id,
      },
    });
  }
}
