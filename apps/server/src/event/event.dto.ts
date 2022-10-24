import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class createEventArgs {
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
export class updateEventArgs {
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
