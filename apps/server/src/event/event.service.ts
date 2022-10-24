import { Injectable } from "@nestjs/common";

import { Event } from "@generated/event/event.model";
import { User } from "@generated/user/user.model";

import { CreateEventArgs, UpdateEventArgs } from "src/event/event.dto";
import { PrismaService } from "src/prisma.service";

import { ForbiddenError } from "apollo-server-core";

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}

  async createEvent(input: CreateEventArgs, user: User) {
    return this.prisma.event.create({
      data: {
        ...input,
        userId: user.id,
      },
    });
  }

  async updateEvent(input: UpdateEventArgs, user: User) {
    return this.prisma.event.update({
      where: {
        id: input.id,
      },
      data: {
        name: input.name,
        description: input.description,
        dueDate: input.dueDate,
        tags: input.tags,
        userId: user.id,
      },
    });
  }

  async deleteEvent(id: string, user: User) {
    const eventOwnerId = (
      await this.prisma.event.findFirstOrThrow({
        where: {
          id,
        },
        select: {
          userId: true,
        },
      })
    ).userId;

    if (user.id !== eventOwnerId) {
      throw new ForbiddenError("Error: You do not have access to this event.");
    }

    return this.prisma.event.delete({
      where: {
        id,
      },
    });
  }

  // Field Resolver

  user(event: Event) {
    return this.prisma.event
      .findUniqueOrThrow({
        where: {
          id: event.id,
        },
      })
      .user();
  }
}
