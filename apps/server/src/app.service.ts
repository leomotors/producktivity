import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  get(): string {
    return `<video autoplay controls>
      <source src="https://cutebutnotcunny.blob.core.windows.net/machikado/machikado-op-1.webm" type="video/webm" />
    </video>`;
  }
}
