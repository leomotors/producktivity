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
        description: input.description,
        dueDate: input.dueDate,
        isCompleted: input.isCompleted,
        tags: input.tags,
      },
    });
  }

  async deleteTask(id: string, user: User) {
    const deletedTasks = await this.prisma.task.deleteMany({
      where: {
        id: id,
        userId: user.id,
      },
    });

    if (deletedTasks.count === 0) {
      throw new ForbiddenException(
        "Resource not found or you do not have access"
      );
    }

    return { id };
  }

  // Field Resolvers

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
