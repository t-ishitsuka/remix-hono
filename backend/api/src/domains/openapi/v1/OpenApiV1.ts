import type { DomainObject } from "~/domains/libs/base/DomainObject";
import { Version } from "~/domains/openapi/v1/Version";
import { OpenApiVersion } from "~/domains/openapi/v1/OpenApiVersion";
import { Title } from "~/domains/openapi/v1/Title";
import { Description } from "~/domains/openapi/v1/Description";
import { JsonUrl } from "~/domains/openapi/v1/JsonUrl";
import { HtmlUrl } from "~/domains/openapi/v1/HtmlUrl";
import { YamlUrl } from "~/domains/openapi/v1/YamlUrl";
import { Redoc } from "~/domains/openapi/v1/Redoc";

const OPEN_API_VERSION = "3.0.0";
const OPEN_API_TITLE = "Remix Hono API Documentation";
const OPEN_API_DESCRIPTION = "API documentation for the application.";

export class OpenApiV1
  implements DomainObject<Record<string, string>, OpenApiV1>
{
  private readonly version: Version;
  private readonly openApiVersion: OpenApiVersion;
  private readonly title: Title;
  private readonly description: Description;

  private readonly jsonUrl: JsonUrl;
  private readonly htmlUrl: HtmlUrl;
  private readonly yamlUrl: YamlUrl;
  private readonly redoc: Redoc;

  constructor(version: string) {
    this.version = new Version(version);
    this.openApiVersion = new OpenApiVersion(OPEN_API_VERSION);
    this.title = new Title(OPEN_API_TITLE);
    this.description = new Description(OPEN_API_DESCRIPTION);

    this.jsonUrl = new JsonUrl(version);
    this.htmlUrl = new HtmlUrl(version);
    this.yamlUrl = new YamlUrl(version);

    this.redoc = new Redoc(this.jsonUrl);
  }

  get() {
    return {
      version: this.version.get(),
      openApiVersion: this.openApiVersion.get(),
      title: this.title.get(),
      description: this.description.get(),
    };
  }

  equals(compareObject: OpenApiV1): boolean {
    return this.version.equals(compareObject.version);
  }

  getVersion(): Version {
    return this.version;
  }

  getOpenApiVersion(): OpenApiVersion {
    return this.openApiVersion;
  }

  getTitle(): Title {
    return this.title;
  }

  getDescription(): Description {
    return this.description;
  }

  getJsonUrl(): JsonUrl {
    return this.jsonUrl;
  }

  getHtmlUrl(): HtmlUrl {
    return this.htmlUrl;
  }

  getYamlUrl(): YamlUrl {
    return this.yamlUrl;
  }

  getRedoc(): Redoc {
    return this.redoc;
  }
}
