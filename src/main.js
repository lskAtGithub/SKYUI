import Vue from 'vue'
import App from './App.vue'

import SkButton from '../src/component/Button'
import SkIcon from '../src/component/Icon'
import SkInput from '../src/component/Input'


Vue.component('SkButton',SkButton)
Vue.component('SkIcon',SkIcon)
Vue.component('SkInput',SkInput)

new Vue({
  el: '#app',
  render: h => h(App)
})
