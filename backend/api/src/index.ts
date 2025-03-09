import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "PUT", "DELETE"],
    allowHeaders: ["Content-Type"],
    maxAge: 86400,
  })
);

const apiRoute = app
  .get("/", (c) => {
    return c.json({ message: "Hello, World!" });
  })
  .get("/hello", (c) => {
    return c.json({ message: "Hello, Hono!" });
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

export type ApiRouteType = typeof apiRoute;
