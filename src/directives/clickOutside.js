import Vue from 'vue';

Vue.directive('click-outside', {
  bind(el, { expression }, { context }) {
    el.clickOutsideEvent = event => {
      if (!(el == event.target || el.contains(event.target))) {
        context[expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind({ clickOutsideEvent }) {
    document.body.removeEventListener('click', clickOutsideEvent)
  },
});