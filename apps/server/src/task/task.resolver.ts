import { Args, Mutation, Resolver } from "@nestjs/graphql";

import { Task } from "@generated/task/task.model";
import { User } from "@generated/user/user.model";

import { RequireLogin } from "src/auth/auth.decorator";
import { UserContext } from "src/user/user.decorator";

import { createTaskArgs, updateTaskArgs } from "./dto/task.dto";
import { TaskService } from "./task.service";

@Resolver()
export class TaskResolver {
  constructor(private readonly service: TaskService) {}

  @Mutation(() => Task)
  @RequireLogin()
  createTask(@Args() input: createTaskArgs, @UserContext() user: User) {
    return this.service.createTask(input, user);
  }

  @Mutation(() => Task)
  @RequireLogin()
  updateTask(@Args() input: updateTaskArgs, @UserContext() user: User) {
    return this.service.updateTask(input, user);
  }

  @Mutation(() => Task)
  @RequireLogin()
  deleteTask(@Args("id") id: string, @UserContext() user: User) {
    return this.service.deleteTask(id, user);
  }
}
