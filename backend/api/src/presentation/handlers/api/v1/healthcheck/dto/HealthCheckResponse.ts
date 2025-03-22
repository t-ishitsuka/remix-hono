import type { StringValueObject } from "~/domains/libs/base/StringValueObject";

export class HealthCheckResponse {
  message: string;

  constructor(params: { message: StringValueObject }) {
    this.message = params.message.get();
  }
}
