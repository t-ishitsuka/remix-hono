import { hc } from "hono/client";
import type { ApiRouteType } from "@remix-hono-backend/api/src/index";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const apiClient = hc<ApiRouteType>(API_BASE_URL);
