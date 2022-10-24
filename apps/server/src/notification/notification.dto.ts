import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class CreateNotificationArgs {
  @Field()
  name!: string;

  @Field({ nullable: true })
  description?: string;
}

@ArgsType()
export class UpdateNotificationArgs {
  @Field()
  id!: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  isVisited?: boolean;
}
