import { BadRequestException, PipeTransform } from "@nestjs/common";

export class UsernameValidation implements PipeTransform {
  async transform(value: string) {
    if (!/^[a-z0-9_]{3,16}$/.test(value)) {
      throw new BadRequestException(
        "Username must be 3-16 characters long and contain only lowercase letters, numbers, and underscores."
      );
    }

    return value;
  }
}
