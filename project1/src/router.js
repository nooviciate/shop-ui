import { createMemoryHistory, createRouter } from 'vue-router'
import Home from './components/Home.vue';
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs';

const routes = [
    {path:'/',component:Home},
    {path:'/Home',component: Home},
    {path:'/ProductAdmin',component: () => import('./components/ProductList/ProductAdmin.vue')},
    {path:'/ProductUser',component:()=>import('./components/ProductList/ProductUser.vue')}
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router