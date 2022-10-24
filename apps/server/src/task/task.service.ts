import { ForbiddenException, Injectable } from "@nestjs/common";

import { Task } from "@generated/task/task.model";
import { User } from "@generated/user/user.model";

import { PrismaService } from "src/prisma.service";

import { CreateTaskArgs, UpdateTaskArgs } from "./task.dto";

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  createTask(input: CreateTaskArgs, user: User) {
    return this.prisma.task.create({
      data: {
        ...input,
        userId: user.id,
      },
    });
  }

  async updateTask(input: UpdateTaskArgs, user: User) {
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
        name: input.name,
        description: input.description ?? undefined,
        dueDate: input.dueDate ?? undefined,
        isCompleted: input.isCompleted ?? undefined,
        tags: input.tags ?? undefined,
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

  user(task: Task) {
    return this.prisma.task
      .findUniqueOrThrow({
        where: {
          id: task.id,
        },
      })
      .user();
  }
}
