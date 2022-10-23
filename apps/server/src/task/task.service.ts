import { Injectable } from "@nestjs/common";

import { CreateOneTaskArgs } from "@generated/task/create-one-task.args";
import { DeleteOneTaskArgs } from "@generated/task/delete-one-task.args";
import { FindManyTaskArgs } from "@generated/task/find-many-task.args";
import { FindUniqueTaskArgs } from "@generated/task/find-unique-task.args";
import { UpdateOneTaskArgs } from "@generated/task/update-one-task.args";

import { PrismaService } from "src/prisma.service";

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  findMany(args?: FindManyTaskArgs) {
    return this.prisma.task.findMany(args);
  }

  findUnique(args: FindUniqueTaskArgs) {
    return this.prisma.task.findUnique(args);
  }

  //   create(args: CreateOneUserArgs) {
  //     return this.prisma.user.create(args);
  //   }

  //   update(args: UpdateOneUserArgs) {
  //     return this.prisma.user.update(args);
  //   }

  //   delete(args: DeleteOneUserArgs) {
  //     return this.prisma.user.delete(args);
  //   }

  //   async users(): Promise<User[]> {
  //     return this.prisma.user.findMany({});
  //   }

  //   async user(id: string): Promise<User | null> {
  //     return this.prisma.user.findUnique({
  //       where: {
  //         id: id,
  //       },
  //     });
  //   }

  //   async createUser(input: )
}
