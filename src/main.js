import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import router from "./router.js";
const app = createApp(App);

/* css import */
import "./assets/css/default/reset.scss";
import "./assets/css/default/fonts.scss";
// import "./assets/css/default/_mixin.scss";
import "./assets/css/default/default.scss";

app.use(router).use(Antd).mount("#app");
