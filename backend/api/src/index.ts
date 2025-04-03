import { serve } from "@hono/node-server";
import { cors } from "hono/cors";
import { OpenAPIHono } from "@hono/zod-openapi";
import { setupOpenApi } from "~/presentation/handlers/api/v1/openapi/OpenApiHandler";
import { apiV1Handler } from "~/presentation/handlers/api/v1/ApiV1Handler";

let app = new OpenAPIHono();

app.use(
  "*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "PUT", "DELETE"],
    allowHeaders: ["Content-Type"],
    maxAge: 86400,
  })
);

app.route("/", apiV1Handler);
app = setupOpenApi(app);

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
