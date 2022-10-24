import { Injectable } from "@nestjs/common";

import { Event } from "@generated/event/event.model";
import { User } from "@generated/user/user.model";

import {
  CreateEventArgs,
  FindManyEventArgs,
  UpdateEventArgs,
} from "src/event/event.dto";
import { PrismaService } from "src/prisma.service";

import { ForbiddenError } from "apollo-server-core";

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}

  async event(id: string) {
    return this.prisma.event.findUnique({
      where: {
        id,
      },
    });
  }

  async events(input: FindManyEventArgs) {
    return this.prisma.event.findMany({
      where: {
        id: input.id,
        name: { contains: input.name },
        description: input.description,
        dueDate: input.dueDate,
        tags: { hasEvery: input.tags },
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        userId: input.userId,
      },
    });
  }

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
      throw new ForbiddenError("Resource not found or you do not have access");
    }

    return { id };
  }

  // Field Resolver

  user(event: Event) {
    return this.prisma.event
      .findUniqueOrThrow({
        where: {
          id: event.id,
        },
      })
      .User();
  }
}
