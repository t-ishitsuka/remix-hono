import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: "src/index.tsx",
      },
    },
  },
  plugins: [tailwindcss()],
});
