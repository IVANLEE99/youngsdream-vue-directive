import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  base: "/youngsdream-vue-directive/vue3-demo/dist",
  plugins: [vue()],
});
