import { Injectable } from "@nestjs/common";

import { User } from "@generated/user/user.model";

import { PrismaService } from "src/prisma.service";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  findByIdOrThrow(id: string) {
    return this.prisma.user.findUniqueOrThrow({
      where: { id },
    });
  }

  // Field Resolvers

  authenticators(user: User) {
    return this.prisma.authenticator.findMany({
      where: {
        userId: user.id,
      },
    });
  }

  challenge(user: User) {
    return this.prisma.challenge.findUnique({
      where: {
        userId: user.id,
      },
    });
  }

  tasks(user: User) {
    return this.prisma.task.findMany({
      where: {
        userId: user.id,
      },
    });
  }

  events(user: User) {
    return this.prisma.event.findMany({
      where: {
        userId: user.id,
      },
    });
  }

  habits(user: User) {
    return this.prisma.habit.findMany({
      where: {
        userId: user.id,
      },
    });
  }

  notifications(user: User) {
    return this.prisma.notification.findMany({
      where: {
        userId: user.id,
      },
    });
  }

  async _count(user: User) {
    return (
      await this.prisma.user.findUniqueOrThrow({
        where: {
          id: user.id,
        },
        select: {
          _count: true,
        },
      })
    )._count;
  }
}
