import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import path from "path";

export default defineConfig({
  base: "/youngsdream-vue-directive/examples/vue2-demo/dist",
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      vue$: "vue/dist/vue.esm.js",
      vue: "@vue/compat",
    },
  },
  server: {
    open: true,
    port: 3008,
  },
  define: {
    "process.env": {},
  },
});
