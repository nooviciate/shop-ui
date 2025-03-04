import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import router from './router'
import axios from 'axios'
import { createPinia } from 'pinia'
import App from './App.vue'
axios.defaults.baseURL = 'https://rapapi.cn/api/app/mock/94';

const app = createApp(App)
const pinia = createPinia()
app.config.globalProperties.$http = axios
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')
