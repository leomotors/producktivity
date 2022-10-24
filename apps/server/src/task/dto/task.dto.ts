import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class createTaskArgs {
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
export class updateTaskArgs {
  @Field()
  id!: string;

  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field()
  dueDate!: Date;

  @Field()
  isCompleted!: boolean;

  @Field(() => [String])
  tags!: string[];
}

@ArgsType()
export class deleteTaskArgs {
  @Field()
  id!: string;
}
