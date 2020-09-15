import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Find from '../views/Find.vue'
import Detail from '../views/Detail.vue'
import Order from '../views/Order.vue'
import Mine from '../views/Mine.vue'
import ElementUI from 'element-ui'
import Login from '../components/Login.vue'
import Resgiter from '../components/Resgiter.vue'
import UserInfo from '../components/UserInfo.vue'

Vue.use(ElementUI);
Vue.use(VueRouter)

const routes = [{
        path: '/home',
        //name: 'Home',
        component: Home
    },
    {
        path: '/find',

        component: Find
    },
    {
        path: '/order',

        component: Order
    },
    {
        path: '/mine',

        component: Mine
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/resgiter',
        component: Resgiter
    },
    {
        path: '/detail/:pageNumber',
        component: Detail
    },
    {
        path: '/userinfo',
        component: UserInfo
    },
    /* 默认页面 */
    {
        path: '/',
        redirect: '/home'
    }

]

const router = new VueRouter({
    linkActiveClass: 'active',
    routes
})

export default router