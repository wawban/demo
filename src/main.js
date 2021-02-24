import Vue from 'vue'
import App from './App'
import router from './router'
import "@/util/style/base.css"; //重置默认样式
// 引入UI库
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element)

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})