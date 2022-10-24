import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class createHabitArgs {
  @Field()
  name!: string;

  @Field(() => [String])
  tags!: string[];
}

@ArgsType()
export class updateHabitArgs {
  @Field()
  id!: string;

  @Field({ nullable: true })
  name?: string;

  @Field(() => [String], { nullable: true })
  tags?: string[];
}
