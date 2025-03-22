import { Hono } from "hono";

const healthCheckHandler = new Hono()
  .basePath("/api/v1/health-check")
  .get("/", (c) => {
    return c.json({ message: "health check!" });
  })
  .get("/2", (c) => {
    return c.json({ message: "health check 2!" });
  });

export { healthCheckHandler };
export type HealthCheckRouteType = typeof healthCheckHandler;
