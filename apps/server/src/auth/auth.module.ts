import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";

import { AuthGuard } from "./auth.guard";
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";
import { RegisterService } from "./register.service";
import { RsaService } from "./rsa.service";

@Module({
  providers: [
    AuthResolver,
    AuthService,
    RegisterService,
    RsaService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AuthModule {}
