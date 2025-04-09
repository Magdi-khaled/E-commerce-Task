import { createApp } from 'vue';
import './assets/styles/main.scss';
import App from './App.vue';
import router from './router';
import { pinia } from "./stores";

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
import 'swiper/css/pagination';

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');
