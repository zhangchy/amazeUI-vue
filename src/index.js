import Button from '../packages/button';
import './assets/font/iconfont.css';
// import merge from './utils/merge';

const version = '0.0.1';
const install = function (Vue, config = {}) {
  if (install.installed) return;
  Vue.component(Button.name, Button);
  /* Vue.use(InfiniteScroll);
  Vue.use(Lazyload, merge({
    loading: require('./assets/loading-spin.svg'),
    attempt: 3
  }, config.lazyload));

  Vue.$messagebox = Vue.prototype.$messagebox = MessageBox;
  Vue.$toast = Vue.prototype.$toast = Toast;
  Vue.$indicator = Vue.prototype.$indicator = Indicator; */
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  install,
  version,
  Button
};
