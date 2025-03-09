import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: "src/index.ts",
      },
    },
  },
  plugins: [tsconfigPaths()],
});
