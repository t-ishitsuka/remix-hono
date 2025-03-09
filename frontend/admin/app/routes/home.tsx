import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { apiCLient } from "@remix-hono-package/rpc/src/api";

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  const response = await apiCLient.index.$get();

  return { message1: (await response.json()).message };
}

// export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
//   const serverData = await serverLoader();
//   const response = await apiCLient.hello.$get();

//   return { ...serverData, messege2: (await response.json()).message };
// }

export default function Home({ loaderData }: Route.ComponentProps) {
  console.log(loaderData);
  return <Welcome />;
}
