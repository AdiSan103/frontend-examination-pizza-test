import { createApp } from "vue";
import './styles/main.scss'
import router from "./router/index.js";
import App from "./App.vue";

const app = createApp(App);

app.use(router); // Apply router before mounting
app.mount("#app"); // Mount only once
