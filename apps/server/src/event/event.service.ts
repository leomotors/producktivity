import { Injectable } from "@nestjs/common";

import { DeleteOneEventArgs } from "@generated/event/delete-one-event.args";
import { User } from "@generated/user/user.model";

import { createEventArgs, updateEventArgs } from "src/event/event.dto";
import { PrismaService } from "src/prisma.service";

import { ForbiddenError } from "apollo-server-core";

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}

  async createEvent(input: createEventArgs, user: User) {
    return this.prisma.event.create({
      data: {
        name: input.name,
        description: input.description,
        dueDate: input.dueDate,
        // ...input,
        userId: user.id,
      },
    });
  }

  async updateEvent(input: updateEventArgs, user: User) {
    return this.prisma.event.update({
      where: {
        id: input.id,
      },
      data: {
        name: input.name,
        description: input.description,
        dueDate: input.dueDate,
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
}
