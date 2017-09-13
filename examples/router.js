/**
 * 描述:
 * 作者: 张春燕 2017/9/4 14:56.
 */
import NavConfig from './nav.config.json';
import Vue from 'vue';
import Router from 'vue-router';
import Demo from './demo.vue';
Vue.use(Router);
const registerRoute = (config) => {
  let routes = [];
  config.map(nav =>
    nav.list.map(page => {
      routes.push({
        name: page.name,
        path: page.path,
        component: (resolve) => require([`./pages${page.path}`], resolve),
        meta: {
          title: page.title || page.name,
          description: page.description
        }
      });
    })
  );

  return { routes, navs: config };
};

const route = registerRoute(NavConfig);

route.routes.push({
  path: '/',
  component: Demo
});

export const navs = route.navs;
console.log(route.routes);
export default new Router({
  routes: route.routes
});
