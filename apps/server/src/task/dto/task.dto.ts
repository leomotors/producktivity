import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class createTaskArgs {
  @Field()
  name!: string;
  description!: string;
  dueDate!: Date;
  tags?: string[];
}
