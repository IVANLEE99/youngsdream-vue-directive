import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // ⚡ 关键：必须指向 TS/JS 文件
      name: "YoungsDreamDirective",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"], // 不把 Vue 打包进去
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
