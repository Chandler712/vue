import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/font/iconfont.css'
import axios from 'axios'
import Vuex from 'vuex'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Vuex);
var store = new Vuex.Store({
    state: {
        totoalcount: []
    },
    mutations: {
        updatecount(state, arg) {
            state.totoalcount = arg
                /*  state.totoalcount.push(arg) */
        }
    }
});

Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://127.0.0.1:7002';
Vue.prototype.$http = axios;
new Vue({
        router, //引入路由
        store: store,
        render: h => h(App) //函数，渲染方法
    }).$mount('#app') //挂载到public里边的index.html中的div id="app"
    // render
    /* render:function(createElemnt){
      return createElemnt(App);
    } */