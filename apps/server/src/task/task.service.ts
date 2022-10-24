/* eslint-disable eqeqeq */
import { ForbiddenException, Injectable } from "@nestjs/common";

import { User } from "@generated/user/user.model";

import { PrismaService } from "src/prisma.service";

import { createTaskArgs, updateTaskArgs } from "./dto/task.dto";

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  createTask(input: createTaskArgs, user: User) {
    return this.prisma.task.create({
      data: {
        ...input,
        userId: user.id,
      },
    });
  }

  async updateTask(input: updateTaskArgs, user: User) {
    const taskOwnerId = (
      await this.prisma.task.findUniqueOrThrow({
        where: {
          id: input.id,
        },
        select: {
          userId: true,
        },
      })
    ).userId;

    if (user.id !== taskOwnerId) {
      throw new ForbiddenException("Error: Trying tp update other user's task");
    }

    return this.prisma.task.update({
      where: {
        id: input.id,
      },
      data: {
        name: input.name != null ? input.name : undefined,
        description: input.description != null ? input.description : undefined,
        dueDate: input.dueDate != null ? input.dueDate : undefined,
        isCompleted: input.isCompleted != null ? input.isCompleted : undefined,
        tags: input.tags != null ? input.tags : undefined,
      },
    });
  }

  async deleteTask(id: string, user: User) {
    const taskOwnerId = (
      await this.prisma.task.findUniqueOrThrow({
        where: {
          id,
        },
        select: {
          userId: true,
        },
      })
    ).userId;

    if (user.id !== taskOwnerId) {
      throw new ForbiddenException("Error: Trying to delete other user's task");
    }

    return this.prisma.task.delete({
      where: {
        id,
      },
    });
  }
}
