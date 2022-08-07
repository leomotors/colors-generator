import path from "node:path";
import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
  resolve: {
    alias: {
      $components: path.resolve("./components"),
      $lib: path.resolve("./lib"),
      $styles: path.resolve("./styles"),
    },
  },
});
