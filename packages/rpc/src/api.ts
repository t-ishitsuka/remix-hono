import { hc } from "hono/client";
import type { ApiRouteType } from "@remix-hono-backend/api/src/index";

export const apiCLient = hc<ApiRouteType>("http://localhost:3000");
