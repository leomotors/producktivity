import { ForbiddenException, Injectable } from "@nestjs/common";

import { Event } from "@generated/event/event.model";
import { User } from "@generated/user/user.model";

import { CreateEventArgs, UpdateEventArgs } from "src/event/event.dto";
import { PrismaService } from "src/prisma.service";

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
    const deletedEvents = await this.prisma.event.deleteMany({
      where: {
        id,
        userId: user.id,
      },
    });

    if (deletedEvents.count === 0) {
      throw new ForbiddenException(
        "Resource not found or you do not have access"
      );
    }

    return { id };
  }

  // Field Resolvers

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
