import Button from '../packages/button';
import ButtonGroup from '../packages/buttonGroup';
import List from '../packages/list';
import View from '../packages/view';
import Group from '../packages/group';
import NavBar from '../packages/navBar';
import './assets/base.scss';
// import merge from './utils/merge';
import ClassNameMixin from './mixins/ClassNameMixin.js';
global.ClassNameMixin = ClassNameMixin;

const version = '0.0.1';
const install = function (Vue, config = {}) {
  if (install.installed) return;
  Vue.component(Button.name, Button);
  Vue.component(ButtonGroup.name, ButtonGroup);
  Vue.component(List.name, List);
  Vue.component(View.name, View);
  Vue.component(Group.name, Group);
  Vue.component(NavBar.name, NavBar);
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
  Button,
  ButtonGroup,
  List,
  View,
  Group,
  NavBar
};
