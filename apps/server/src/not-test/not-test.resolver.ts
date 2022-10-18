import { Args, Query, Resolver } from "@nestjs/graphql";

import { FindManyNotTestArgs } from "@generated/not-test/find-many-not-test.args";
import { NotTest } from "@generated/not-test/not-test.model";

import { NotTestService } from "./not-test.service";

@Resolver(() => NotTest)
export class NotTestResolver {
  constructor(private readonly service: NotTestService) {}

  @Query(() => [NotTest])
  notTests(@Args() args: FindManyNotTestArgs) {
    return this.service.findMany(args);
  }
}
