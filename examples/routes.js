/**
 * 描述:
 * 作者: 张春燕 2017/9/4 14:56.
 */
/* import NavConfig from './nav.config.json';

const registerRoute = (config) => {
  let route = [];
  config.map(nav =>
    nav.list.map(page => {
      route.push({
        name: page.name,
        path: page.path,
        component: require(`./pages${page.path}`),
        meta: {
          title: page.title || page.name,
          description: page.description
        }
      });
    })
  );

  return { route, navs: config };
};

const route = registerRoute(NavConfig);

route.route.push({
  path: '/',
  component: require('./demo.vue')
});

export const navs = route.navs; */
export default [
  {
    name: 'Button',
    path: '/button',
    component: require('./pages/button.vue'),
    beforeEnter: (to, from, next) => {
      console.log(to);
      console.log(from);
      console.log('66666666666666666');
    }
  }
];
