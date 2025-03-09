import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { hc } from "hono/client";
import type { AppRouteType } from "../../../../backend/api/src/index";

const client = hc<AppRouteType>("http://localhost:3000");

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  const response = await client.index.$get();
  return response.json();
}

export default function Home({ loaderData }: Route.ComponentProps) {
  console.log(loaderData);
  return <Welcome />;
}
