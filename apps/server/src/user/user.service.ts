import { Injectable } from "@nestjs/common";

// import { CreateOneUserArgs } from "@generated/user/create-one-user.args";
// import { DeleteOneUserArgs } from "@generated/user/delete-one-user.args";
import { FindManyUserArgs } from "@generated/user/find-many-user.args";
import { FindUniqueUserArgs } from "@generated/user/find-unique-user.args";

// import { UpdateOneUserArgs } from "@generated/user/update-one-user.args";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  findMany(args?: FindManyUserArgs) {
    return this.prisma.user.findMany(args);
  }

  findUnique(args: FindUniqueUserArgs) {
    return this.prisma.user.findUnique(args);
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
