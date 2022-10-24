import { ArgsType, Field, ObjectType } from "@nestjs/graphql";

@ArgsType()
export class CreateHabitArgs {
  @Field()
  name!: string;

  @Field(() => [String])
  tags!: string[];
}

@ArgsType()
export class UpdateHabitArgs {
  @Field()
  id!: string;

  @Field({ nullable: true })
  name?: string;

  @Field(() => [String], { nullable: true })
  tags?: string[];
}

@ObjectType()
export class DeleteHabitReturnType {
  @Field()
  id!: string;
}
