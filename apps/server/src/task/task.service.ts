import { Injectable } from "@nestjs/common";

import { User } from "@generated/user/user.model";

import { PrismaService } from "src/prisma.service";

import { createTaskArgs } from "./dto/task.dto";

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}
  async createTask(input: createTaskArgs, user: User) {
    await this.prisma.task.create({
      data: {
        name: input.name,
        description: input.description,
        dueDate: input.dueDate,
        userId: user.id,
      },
    });
    return true;
  }
}
