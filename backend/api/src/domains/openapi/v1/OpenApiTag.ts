import { StringValueObject } from "~/domains/libs/base/StringValueObject";

export class OpenApiTag extends StringValueObject {
  static HealthCheck = new OpenApiTag("HealthCheck");
}
