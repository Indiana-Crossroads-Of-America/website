import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueTyperPlugin from "vue-typer";
createApp(App).use(router, VueTyperPlugin).mount("#app");
