import { Args, Mutation, Resolver } from "@nestjs/graphql";

import { Task } from "@generated/task/task.model";
import { User } from "@generated/user/user.model";

import { RequireLogin } from "src/auth/auth.decorator";
import { UserContext } from "src/user/user.decorator";

import { CreateTaskArgs, UpdateTaskArgs } from "./task.dto";
import { TaskService } from "./task.service";

@Resolver(() => Task)
@RequireLogin()
export class TaskResolver {
  constructor(private readonly service: TaskService) {}

  @Mutation(() => Task)
  createTask(@Args() input: CreateTaskArgs, @UserContext() user: User) {
    return this.service.createTask(input, user);
  }

  @Mutation(() => Task)
  updateTask(@Args() input: UpdateTaskArgs, @UserContext() user: User) {
    return this.service.updateTask(input, user);
  }

  @Mutation(() => Task)
  deleteTask(@Args("id") id: string, @UserContext() user: User) {
    return this.service.deleteTask(id, user);
  }
}
