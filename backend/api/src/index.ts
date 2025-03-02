import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

const appRoute = app.get("/", (c) => {
  return c.json({ message: "Hello, World!" });
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);

export type AppRouteType = typeof appRoute;

// 次にやりたい
// hc client を packages から取得する
//
