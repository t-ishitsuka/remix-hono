import { Hono } from "hono";
import { StringValueObject } from "~/domains/libs/base/StringValueObject";
import { HealthCheckResponse } from "~/presentation/handlers/api/v1/healthcheck/dto/HealthCheckResponse";

const healthCheckHandler = new Hono()
  .basePath("/api/v1/health-check")
  .get("/", (c) => {
    return c.json(
      new HealthCheckResponse({
        message: new StringValueObject("ok"),
      })
    );
  });

export { healthCheckHandler };
export type HealthCheckRouteType = typeof healthCheckHandler;
