import Vue from 'vue'
import App from './App.vue'

import vButton from '../src/component/Button'
import vIcon from '../src/component/Icon'
import vInput from '../src/component/Input'


Vue.component('vButton',vButton)
Vue.component('vIcon',vIcon)
Vue.component('vInput',vInput)

new Vue({
  el: '#app',
  render: h => h(App)
})
