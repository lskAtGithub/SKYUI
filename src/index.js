import skTab from './SkTab.vue';
export default skTab;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('sk-table', skTab);
}