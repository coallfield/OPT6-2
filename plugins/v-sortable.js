import Sortable from 'sortablejs';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('sortable', {
    mounted(el, binding) {
      new Sortable(el, binding.value || {});
    },
  });
});