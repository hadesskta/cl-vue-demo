// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 样式配置，会从上到下进行加载
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/global.scss'

// 需要用到的组件
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI, { Form } from 'element-ui'
import Nprogress from 'nprogress'
import App from './App'
import store from './vuex/initStore'
import routes from './routers/routes'
import init from './init'

// 不使用mock时可以关闭

// import Mock from './mock/mock'
// Mock.init();

// 装载插件
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

/**
 * 新增store控制
 */

/**
 * 新增router控制阀
 */
router.beforeEach((to, from, next) =>{
  console.log('页面跳转：', to);
  if(to.path === '/'){
    next({path:'/mainpage', replace: true})
  }else{
    next()
  }
});

let initApp = ()=>{
  Nprogress.done();
  new Vue({
    // el: '#app',
    router,
    store,
    // components: { App },
    render: h => h(App)
    // template: '<App/>'
  }).$mount('#app')
}

Nprogress.start();
Vue.use(init,{
  store,
  router,
  initApp
});
