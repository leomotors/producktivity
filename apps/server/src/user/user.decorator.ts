import {
  ExecutionContext,
  InternalServerErrorException,
  createParamDecorator,
} from "@nestjs/common";

import { User } from "@generated/user/user.model";

export const UserContext = createParamDecorator(
  (data: never, ctx: ExecutionContext) => {
    const user = ctx.getArgByIndex(2).req?.user as User;

    if (!user) {
      throw new InternalServerErrorException("Authorization failed");
    }

    return user;
  }
);
