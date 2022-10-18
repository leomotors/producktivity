import { Module } from "@nestjs/common";

import { NotTestResolver } from "./not-test.resolver";
import { NotTestService } from "./not-test.service";

@Module({
  providers: [NotTestResolver, NotTestService],
})
export class NotTestModule {}
