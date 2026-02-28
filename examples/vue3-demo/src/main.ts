import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PermissionDirective from "@youngsdream/permission";

createApp(App).use(PermissionDirective).mount("#app");
