import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PermissionDirective from "@youngsdream/permission";
import ExposureDirective from "@youngsdream/exposure";

Vue.use(PermissionDirective);
Vue.use(ExposureDirective);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
