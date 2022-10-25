import { ForbiddenException, Injectable } from "@nestjs/common";

import { Notification } from "@generated/notification/notification.model";
import { User } from "@generated/user/user.model";

import { PrismaService } from "src/prisma.service";

import {
  CreateNotificationArgs,
  UpdateNotificationArgs,
} from "./notification.dto";

@Injectable()
export class NotificationService {
  constructor(private readonly prisma: PrismaService) {}

  createNotification(input: CreateNotificationArgs, user: User) {
    return this.prisma.notification.create({
      data: {
        name: input.name,
        description: input.description,
        userId: user.id,
      },
    });
  }

  async updateNotification(input: UpdateNotificationArgs, user: User) {
    const notificationOwnerId = (
      await this.prisma.notification.findUniqueOrThrow({
        where: {
          id: input.id,
        },
        select: {
          userId: true,
        },
      })
    ).userId;

    if (user.id !== notificationOwnerId) {
      throw new ForbiddenException(
        "Error: Trying to update other user's notification"
      );
    }

    return this.prisma.notification.update({
      where: {
        id: input.id,
      },
      data: {
        name: input.name,
        description: input.description,
        isVisited: input.isVisited,
      },
    });
  }

  async deleteNotification(id: string, user: User) {
    const deletedNotification = await this.prisma.notification.deleteMany({
      where: {
        id: id,
        userId: user.id,
      },
    });

    if (deletedNotification.count === 0) {
      throw new ForbiddenException(
        "Resource not found or you do not have access"
      );
    }

    return { id };
  }

  // Field Resolvers

  user(notification: Notification) {
    return this.prisma.notification
      .findUniqueOrThrow({
        where: {
          id: notification.id,
        },
      })
      .user();
  }

  notVisited(user: User) {
    return this.prisma.notification.findMany({
      where: { isVisited: false, userId: user.id },
    });
  }
}
