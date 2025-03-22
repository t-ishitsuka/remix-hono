import { Hono } from "hono";
import { healthCheckHandler } from "~/presentation/handlers/api/v1/healthcheck/HealthCheckHandler";

const apiV1Handler = new Hono();

apiV1Handler.route("/", healthCheckHandler);

export { apiV1Handler };
