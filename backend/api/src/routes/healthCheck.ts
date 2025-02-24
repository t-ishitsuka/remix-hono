import { Hono } from "hono";

const healthCheckApp = new Hono();

healthCheckApp.get("/", (c) => {
  return c.json({ status: "ok" });
});

export { healthCheckApp };
