import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class habitArgs {
  @Field()
  name!: string;

  @Field()
  id?: string;

  @Field(() => [String])
  tags!: string[];
}
