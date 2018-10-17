/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.$http = axios
// Vue.prototype.$router = router
Vue.config.productionTip = false

var shared = 'hi'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})

Vue.mixin({
  data: function() {
    return {
      get globalTableValue () {
        var myJson = [
          {
            'Key': 'type',
            'Value': 'init',
            'Description': null
          },
          {
            'Key': 'side',
            'Value': 'buy',
            'Description': null
          },
          {
            'Key': 'side',
            'Value': 'buy',
            'Description': null
          }
        ]
        return myJson
      }
    }
  }
})
