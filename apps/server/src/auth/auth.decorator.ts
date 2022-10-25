import { SetMetadata } from "@nestjs/common";

import { AuthKey, AuthRole } from "./auth.utils";

export const RequireLogin = (required = true) =>
  SetMetadata<typeof AuthKey, AuthRole>(AuthKey, required ? "User" : "Public");
