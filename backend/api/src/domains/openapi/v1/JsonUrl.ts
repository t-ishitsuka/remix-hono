import { StringValueObject } from "~/domains/libs/base/StringValueObject";

export class JsonUrl extends StringValueObject {
  private readonly version: string;

  constructor(version: string) {
    super(`/openapi/${version}/json`);
    this.version = version;
  }

  latest() {
    return this.get().replace(this.version, "latest");
  }
}
