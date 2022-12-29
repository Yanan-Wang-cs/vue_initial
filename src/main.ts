import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { getStaticFile } from "@/api/api";
import "@/assets/style/index.scss";

async function start() {
  const { data: config } = await getStaticFile("/config/config.json");
  const { data: en } = await getStaticFile("/lang/en.json");
  const { data: zh } = await getStaticFile("/lang/zh.json");
  const messages = {
    en,
    zh,
  };
  console.log(config, en, zh, messages);
  document.getElementsByTagName("body")[0].setAttribute("class", config.theme);
  
  const vm = 
  vm.provide("$myconfig", config);
  vm.mount("#app");
}

createApp(App).use(store).use(router).use(i18n).mount("#app");
