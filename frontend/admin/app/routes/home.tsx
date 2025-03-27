import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { healthCheckClient } from "@remix-hono-package/rpc/src/api";
import { UiText } from "@remix-hono-package/ui/src/UiText";
import { Button } from "@remix-hono-package/ui/src/components/ui/Button";

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  const response = await healthCheckClient.api.v1["health-check"].$get();

  return { message1: (await response.json()).message, message2: "" };
}

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
  const serverData = await serverLoader();
  const response = await healthCheckClient.api.v1["health-check"].$get();

  return { ...serverData, message2: (await response.json()).message };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { message1, message2 } = loaderData;
  console.log(message1);
  console.log(message2);

  return (
    <>
      <Welcome world={message1} hono={message2} />
      <UiText />
      <Button variant="destructive" size="lg">
        Click me
      </Button>
    </>
  );
}
