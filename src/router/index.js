import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/CountDown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CountDown',
      component: HelloWorld
    }
  ]
})
