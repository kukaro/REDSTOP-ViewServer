import Vue from 'vue'
import Router from 'vue-router'
import RsBoard from '@/components/RsBoard'
import RsTb from '@/components/RsTb'
import RsTbAside from '@/components/RsTbAside'
import RsMr from '@/components/RsMr'
import RsMrMonitoring from '@/components/RsMr/RsMrMonitoring'
import RsMrBoard from '@/components/RsMr/RsMrBoard'
import RsMrApi from '@/components/RsMrApi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'rs-board',
      component: RsBoard
    },
    {
      path: '/test-block',
      name: 'rs-tb',
      component: RsTb,
      children: [
        {
          path: ':url',
          name: 'rs-tb2-singleurl',
          component: RsTbAside,
          props: true
        }
      ]
    },
    {
      path: '/monitoring',
      name: 'rs-mr',
      component: RsMr,
      children: [
        {
          path: 'monitoring',
          name: 'rs-mr-monitoring',
          component: RsMrMonitoring
        },
        {
          path: 'board',
          name: 'rs-mr-board',
          component: RsMrBoard
        }
      ]
    },
    {
      path: '/temp',
      name: 'rs-mr-api',
      component: RsMrApi
    }
  ]
})
