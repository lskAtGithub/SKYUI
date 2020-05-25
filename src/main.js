import Vue from 'vue'
import App from './App.vue'

import vButton from '../src/component/Button'
import vIcon from '../src/component/Icon'

Vue.component('vButton',vButton)
Vue.component('vIcon',vIcon)

new Vue({
  el: '#app',
  render: h => h(App)
})
