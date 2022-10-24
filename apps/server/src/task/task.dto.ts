import { ArgsType, Field, ObjectType } from "@nestjs/graphql";

@ArgsType()
export class CreateTaskArgs {
  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field()
  dueDate!: Date;

  @Field(() => [String])
  tags!: string[];
}

@ArgsType()
export class UpdateTaskArgs {
  @Field()
  id!: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  dueDate?: Date;

  @Field({ nullable: true })
  isCompleted?: boolean;

  @Field(() => [String], { nullable: true })
  tags?: string[];
}

@ObjectType()
export class DeleteTaskReturnType {
  @Field()
  id!: string;
}
