import { Controller, Get, Redirect } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  @Redirect(
    "https://cutebutnotcunny.blob.core.windows.net/machikado/machikado-op-1.webm"
  )
  get() {
    return;
  }

  @Get("/v2")
  @Redirect(
    "https://cutebutnotcunny.blob.core.windows.net/machikado/machikado-op-2.webm"
  )
  getV2() {
    return;
  }
}
