import type { OpenAPIHono } from "@hono/zod-openapi";
import { OpenApiV1 } from "~/domains/openapi/v1/OpenApiV1";

const openApiV1 = new OpenApiV1("0.1.0");

export const setupOpenApi = (app: OpenAPIHono) => {
  app
    .doc(openApiV1.getJsonUrl().latest(), {
      openapi: openApiV1.getOpenApiVersion().get(),
      info: {
        title: openApiV1.getTitle().get(),
        version: openApiV1.getVersion().get(),
        description: openApiV1.getDescription().get(),
      },
    })
    .get(openApiV1.getHtmlUrl().latest(), (c) =>
      c.html(openApiV1.getRedoc().html())
    );

  return app;
};
