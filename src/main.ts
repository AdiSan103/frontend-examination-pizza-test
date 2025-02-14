import { createApp } from "vue";
import './styles/main.scss'
import { createPinia } from 'pinia';
import router from "./router/index.js";
import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router); // Apply router before mounting
app.mount("#app"); // Mount only once
