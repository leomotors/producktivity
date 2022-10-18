import { Injectable } from "@nestjs/common";

import { FindManyNotTestArgs } from "@generated/not-test/find-many-not-test.args";

import { PrismaService } from "src/prisma.service";

@Injectable()
export class NotTestService {
  constructor(private readonly prisma: PrismaService) {}

  findMany(args?: FindManyNotTestArgs) {
    return this.prisma.notTest.findMany(args);
  }
}
