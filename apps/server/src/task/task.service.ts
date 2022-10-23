import { Injectable } from "@nestjs/common";

import { User } from "@generated/user/user.model";

import { PrismaService } from "src/prisma.service";

import { createTaskArgs, updateTaskArgs } from "./dto/task.dto";

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}
  createTask(input: createTaskArgs, user: User) {
    return this.prisma.task.create({
        data: {
          name: input.name,
          description: input.description,
          dueDate: input.dueDate,
          userId: user.id,
        },
      });
  }

  updateTask(input: updateTaskArgs, user: User) {
      return this.prisma.task.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          description: input.description,
          dueDate: input.dueDate,
          updatedAt: Date.now().toString(),
          userId: user.id,
        },
      });
  }

  deleteTaskByID(id: string) {
      return this.prisma.task.delete({
        where: {
          id: id,
        },
      });
  }

  deleteTaskByName(taskname: string, user: User) {
      return this.prisma.task.deleteMany({
        where: {
          name: taskname,
          userId: user.id,
        },
      });
  }
}
