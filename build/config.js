/**
 * 描述: cooking相关配置
 * 作者: 张春燕 2017/8/29 15:54.
 */
var path = require('path')
// 排除不需要打包的内容
var Components = require('../components.json');
var dependencies = require('../package.json').dependencies;
var externals = {};
var pkg = {};
Object.keys(Components).forEach(function(key) {
  externals[`element-ui/packages/${key}`] = `element-ui/lib/${key}`;
});
Object.keys(dependencies).forEach(function(key) {
  externals[key] = key;
  pkg[key] = key;
});

module.exports = {
  alias: {
    'vue$': 'vue/dist/vue.min.js',
    'main': path.resolve(__dirname, '../src'),
    'packages': path.resolve(__dirname, '../packages'),
    '@examples': path.resolve(__dirname, '../examples'),
    '@src': path.resolve(__dirname, '../src'),
    'amazeui': path.resolve(__dirname, '../'),
    '@pages': path.resolve(__dirname, '../examples/pages'),
  },
  externals: Object.assign({ vue: 'Vue' }, externals),
  pkg: Object.assign({vue: 'Vue'}, pkg),
  jsexclude: /node_modules|lib/
}
