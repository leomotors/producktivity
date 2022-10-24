import { ArgsType, Field, ObjectType } from "@nestjs/graphql";

@ArgsType()
export class CreateEventArgs {
  @Field()
  name!: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  dueDate!: Date;

  @Field(() => [String])
  tags!: string[];
}

@ArgsType()
export class UpdateEventArgs {
  @Field()
  id!: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  dueDate?: Date;

  @Field(() => [String], { nullable: true })
  tags?: string[];
}

@ObjectType()
export class DeleteEventReturnType {
  @Field()
  id!: string;
}
