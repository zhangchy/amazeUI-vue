/**
 * 描述:
 * 作者: 张春燕 2017/9/4 14:55.
 */
import Vue from 'vue';
import App from './app.vue';
import router from './router.js';
import { install as AV } from '../src/index.js';
import './style.scss';
document.addEventListener('DOMContentLoaded', function () {
  if (window.FastClick) window.FastClick.attach(document.body);
}, false);

Vue.use(AV);

new Vue({ // eslint-disable-line
  el: '#app',
  template: '<App/>',
  components: { App },
  router
});
let indexScrollTop = 0;
router.beforeEach((route, redirect, next) => {
  if (route.path !== '/') {
    indexScrollTop = document.body.scrollTop;
  }
  document.title = route.meta.title || document.title;
  next();
});

router.afterEach(route => {
  if (route.path !== '/') {
    document.body.scrollTop = 0;
  } else {
    Vue.nextTick(() => {
      document.body.scrollTop = indexScrollTop;
    });
  }
});
