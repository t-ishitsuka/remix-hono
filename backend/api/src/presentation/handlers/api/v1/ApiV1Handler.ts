import { OpenAPIHono } from "@hono/zod-openapi";
import { healthCheckHandlers } from "~/presentation/handlers/api/v1/healthcheck/HealthCheckHandler";

const apiV1Handler = new OpenAPIHono();

apiV1Handler.route("/", healthCheckHandlers);

export { apiV1Handler };
