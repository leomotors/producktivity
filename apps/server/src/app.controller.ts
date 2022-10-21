import { Controller, Get, Redirect } from "@nestjs/common";

import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}

  @Get()
  @Redirect(
    "https://cutebutnotcunny.blob.core.windows.net/machikado/machikado-op-1.webm"
  )
  get() {
    return this.service.get();
  }

  @Get("/v2")
  @Redirect(
    "https://cutebutnotcunny.blob.core.windows.net/machikado/machikado-op-2.webm"
  )
  getV2() {
    return;
  }
}
