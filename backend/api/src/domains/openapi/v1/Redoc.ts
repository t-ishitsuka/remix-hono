import { StringValueObject } from "~/domains/libs/base/StringValueObject";
import type { JsonUrl } from "~/domains/openapi/v1/JsonUrl";

export class Redoc extends StringValueObject {
  private readonly specUrl: JsonUrl;

  constructor(specUrl: JsonUrl) {
    super("Call html rendering method.");
    this.specUrl = specUrl;
  }

  html(): string {
    return `
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="SwaggerUI" />
          <title>Sample API | Redoc</title>
        </head>
        <body>
          <redoc spec-url="${this.specUrl.latest()}"></redoc>
          <script src="https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js">
            +{" "}
          </script>
        </body>
      </html>
    `;
  }
}
