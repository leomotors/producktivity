// import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Args, Query, Resolver } from "@nestjs/graphql";

// import { CreateOneUserArgs } from "@generated/user/create-one-user.args";
// import { DeleteOneUserArgs } from "@generated/user/delete-one-user.args";
import { FindManyUserArgs } from "@generated/user/find-many-user.args";
import { FindUniqueUserArgs } from "@generated/user/find-unique-user.args";
// import { UpdateOneUserArgs } from "@generated/user/update-one-user.args";
import { User } from "@generated/user/user.model";

import { UserService } from "./user.service";

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly service: UserService) {}

  @Query(() => [User])
  users(@Args() args?: FindManyUserArgs) {
    return this.service.findMany(args);
  }

  @Query(() => User)
  user(@Args() args: FindUniqueUserArgs) {
    return this.service.findUnique(args);
  }

  //   @Mutation(() => User)
  //   createOneUser(@Args() args: CreateOneUserArgs) {
  //     return this.service.create(args);
  //   }

  //   @Mutation(() => [User])
  //   updateOneUser(@Args() args: UpdateOneUserArgs) {
  //     return this.service.update(args);
  //   }

  //   @Mutation(() => [User])
  //   deleteOneUserArgs(@Args() args: DeleteOneUserArgs) {
  //     return this.service.delete(args);
  //   }
}
