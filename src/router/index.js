// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import ins from "@/page"

// Vue.use(Router)

// export default new Router({
//   routes: [{
//     path: '/',
//     name: 'ins',
//     component: ins
//   }]
// })

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import {
  router_login
} from "./login" //登录
export default new Router({
  routes: [
    {
    path: '/',
    redirect: '/login'
    },
    router_login
  ]
})
