import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import './plugins/element-plus';
import './plugins/echarts';
import './plugins/leaflet';
import './styles/index.scss'

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.mount('#app');