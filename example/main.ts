import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import DynamicModules from '../src';
import { createApp } from 'vue';
import App from './App.vue';

function bootstrap() {
  const app = createApp(App);
  app.use(DynamicModules);
  app.use(ElementPlus);
  app.mount('#app');
}

bootstrap();
