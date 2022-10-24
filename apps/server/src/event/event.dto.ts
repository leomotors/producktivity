import { ArgsType, Field } from "@nestjs/graphql";

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

  @Field()
  name!: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  dueDate!: Date;

  @Field(() => [String])
  tags!: string[];
}
