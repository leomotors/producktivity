import { Injectable } from "@nestjs/common";

// import { CreateOneEventArgs } from "@generated/event/create-one-event.args";
import { EventArgs } from "src/event/event.dto";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}

  //   create(args: CreateOneEventArgs) {
  //     return this.prisma.event.create(args);
  //   }

  async createEvent(input: EventArgs) {
    return this.prisma.event.create({
      data: input,
    });
  }
}
