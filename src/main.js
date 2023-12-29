import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-plus';
import 'element-ui/lib/theme-chalk/index.css';

//创建应用实例  使用element、router        控制html元素
createApp(App).use(ElementUI).use(router).mount('#app')


