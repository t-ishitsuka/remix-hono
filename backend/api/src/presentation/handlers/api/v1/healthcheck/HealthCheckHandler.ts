import { createRoute, OpenAPIHono, type RouteHandler } from "@hono/zod-openapi";
import { StringValueObject } from "~/domains/libs/base/StringValueObject";
import { ResponseCode } from "~/domains/libs/response/ResponseCode";
import { OpenApiTag } from "~/domains/openapi/v1/OpenApiTag";
import {
  HealthCheckResponse,
  HealthCheckResponseSchema,
} from "~/presentation/handlers/api/v1/healthcheck/dto/HealthCheckResponse";

/**
 * Health check
 */
const healthCheckRoute = createRoute({
  method: "get",
  summary: "ヘルスチェック",
  description: "アプリケーションヘルスチェック",
  tags: [OpenApiTag.HealthCheck.get()],
  path: "/api/v1/health-check",
  responses: {
    200: {
      description: "アプリケーションは健全",
      content: {
        "application/json": {
          schema: HealthCheckResponseSchema,
        },
      },
    },
  },
});

const healthCheck: RouteHandler<typeof healthCheckRoute> = (c) => {
  return c.json(
    new HealthCheckResponse({
      message: new StringValueObject("ok"),
    }),
    ResponseCode.OK
  );
};

const healthCheckHandlers = new OpenAPIHono().openapi(
  healthCheckRoute,
  healthCheck
);

export { healthCheckHandlers };
export type HealthCheckHandlersType = typeof healthCheckHandlers;
