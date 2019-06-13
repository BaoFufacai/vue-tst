import Vue from 'vue'
import App from './App'
import {Button} from 'mint-ui'
import router from './router'
import Header from './components/Header/Header.vue'
import store from  './vuex/store'
import Star from './components/Star/Star.vue'
import CartControl from './components/CartControl/CartControl'
import Split from './components/Split/Split.vue'
import './validate'
import './mock/mock-server'
import './components/filters'


Vue.config.productionTip = false
//注册全局组件
Vue.component('Header', Header)
Vue.component('Star',Star)
Vue.component(Button.name,Button)
Vue.component('CartControl',CartControl)
Vue.component('Split',Split)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
