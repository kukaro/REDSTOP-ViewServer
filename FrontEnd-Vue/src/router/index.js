import Vue from 'vue'
import Router from 'vue-router'
import RsBoard from '@/components/RsBoard'
import RsTb from '@/components/RsTb'
import RsTbAside from '@/components/RsTbAside'
import RsMr from '@/components/RsMr'
import RsMrMonitoring from '@/components/RsMr/RsMrMonitoring'
import RsMrBoard from '@/components/RsMr/RsMrBoard'
import RsMrApi from '@/components/RsMrApi'
import RsReport from '@/components/RsReport'
import RsScenario from '@/components/RsScenario/RsScenario'
import RsScenarioDetail from '@/components/RsScenario/RsScenarioDetail'
import RsScenarioStart from '@/components/RsScenario/RsScenarioStart'
import RsScenarioRun from '@/components/RsScenario/RsScenarioRun/RsScenarioRun'

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
          path: '/aside',
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
    },
    {
      path: '/report',
      name: 'RsReport',
      component: RsReport
    },
    {
      path: '/scenario',
      component: RsScenario,
      children: [
        {
          path: '',
          component: RsScenarioStart
        },
        {
          path: ':name',
          name: 'RsScenarioDetail',
          component: RsScenarioDetail,
          props: true,
          children: [
            {
              path: 'run',
              name: 'RsScenarioRun',
              component: RsScenarioRun,
              props: true
            }
          ]
        }
      ]
    }
  ]
})
