import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class EventArgs {
  @Field()
  name!: string;

  @Field()
  description?: string;

  @Field(() => [String])
  tags!: string[];

  @Field()
  dueDate!: Date;
}
