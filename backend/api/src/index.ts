import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { healthCheckApp } from "./routes/healthCheck.js";

const apiV1 = new Hono().basePath("/api/v1");

apiV1
  .get("/", (c) => {
    return c.text("Hello Hono!");
  })
  .route("/health-check", healthCheckApp);

serve(
  {
    fetch: apiV1.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
