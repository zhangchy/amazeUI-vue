/**
 * 描述:
 * 作者: 张春燕 2017/9/4 14:55.
 */
import path from 'path';
import Vue from 'vue';
import App from './app.vue';
import routes from './routes.js';
import { install as AV } from '../src/index.js';
import VueRouter from 'vue-router';

document.addEventListener('DOMContentLoaded', function () {
  if (window.FastClick) window.FastClick.attach(document.body);
}, false);

Vue.use(AV);
Vue.use(VueRouter);

const router = new VueRouter({
  base: path.resolve(__dirname, '/examples'),
  routes
});
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
