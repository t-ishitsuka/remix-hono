import { StringValueObject } from "~/domains/libs/base/StringValueObject";

export class YamlUrl extends StringValueObject {
  private readonly version: string;

  constructor(version: string) {
    super(`/openapi/${version}/yaml`);
    this.version = version;
  }

  latest() {
    return this.get().replace(this.version, "latest");
  }
}
