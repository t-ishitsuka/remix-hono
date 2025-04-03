import { hc } from "hono/client";
import type { HealthCheckHandlersType } from "@remix-hono-backend/api/src/presentation/handlers/api/v1/healthcheck/HealthCheckHandler";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const healthCheckClient = hc<HealthCheckHandlersType>(API_BASE_URL);
