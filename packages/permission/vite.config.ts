import { defineConfig } from "vite"

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "Permission",
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  }
})
