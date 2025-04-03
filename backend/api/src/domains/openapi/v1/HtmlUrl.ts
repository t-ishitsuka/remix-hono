import { StringValueObject } from "~/domains/libs/base/StringValueObject";

export class HtmlUrl extends StringValueObject {
  private readonly version: string;

  constructor(version: string) {
    super(`/openapi/${version}/html`);
    this.version = version;
  }

  latest() {
    return this.get().replace(this.version, "latest");
  }
}
