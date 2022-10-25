import { ArgsType, Field, ObjectType } from "@nestjs/graphql";

@ArgsType()
export class CreateHabitArgs {
  @Field()
  name!: string;

  @Field(() => [String])
  tags!: string[];

  @Field({ nullable: true })
  currentCount?: number;

  @Field({ nullable: true })
  targetCount?: number;
}

@ArgsType()
export class UpdateHabitArgs {
  @Field()
  id!: string;

  @Field({ nullable: true })
  name?: string;

  @Field(() => [String], { nullable: true })
  tags?: string[];

  @Field({ nullable: true })
  currentCount?: number;

  @Field({ nullable: true })
  targetCount?: number;
}

@ObjectType()
export class DeleteHabitReturnType {
  @Field()
  id!: string;
}
