import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PermissionDirective from "@youngsdream/permission";
import ExposureDirective from "@youngsdream/exposure";

createApp(App).use(PermissionDirective).use(ExposureDirective).mount("#app");
