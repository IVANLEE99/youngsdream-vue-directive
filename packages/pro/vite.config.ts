import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ProDirective",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "crypto"],
      output: {
        globals: {
          vue: "Vue",
          crypto: "crypto",
        },
      },
    },
  },
});
