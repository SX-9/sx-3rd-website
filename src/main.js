import { createApp } from 'vue'
import confetti from 'vue-confetti';
import mitt from 'mitt';
import App from './App.vue';
import './style.css';

const app = createApp(App);

app.config.globalProperties.emitter = mitt();
app.use(confetti);
app.mount('#app');
