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

@ArgsType()
export class deleteTaskArgs {
  @Field()
  id!: string;
}
