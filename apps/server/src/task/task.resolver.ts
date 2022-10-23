import { Args, Mutation, Resolver } from "@nestjs/graphql";

import { User } from "@generated/user/user.model";

import { UserContext } from "src/user/user.decorator";

import { createTaskArgs, updateTaskArgs } from "./dto/task.dto";
import { TaskService } from "./task.service";

@Resolver()
export class TaskResolver {
  constructor(private readonly service: TaskService) {}

  @Mutation(() => Boolean)
  createTask(@Args() input: createTaskArgs, @UserContext() user: User) {
    return this.service.createTask(input, user);
  }

  @Mutation(() => Boolean)
  updateTask(@Args() input: updateTaskArgs, @UserContext() user: User) {
    return this.service.updateTask(input, user);
  }

  @Mutation(() => Boolean)
  deleteTaskByID(@Args() id: string) {
    return this.service.deleteTaskByID(id);
  }

  @Mutation(() => Boolean)
  deleteTaskByName(@Args() taskname: string, @UserContext() user: User) {
    return this.service.deleteTaskByName(taskname, user);
  }
}
