// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styling/reset.css';

const app = createApp(App);
app.use(router);
app.mount('#app');