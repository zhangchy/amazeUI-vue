/**
 * 描述: 生成commonjs模式
 * 作者: 张春燕 2017/8/29 15:38.
 */
var webpackConfig = require('./webpack.base.conf.js');
var cooking = require('./cooking.js');
var config = require('./config.js');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
webpackConfig.plugins.push(
  new ExtractTextPlugin("styles.css")
)
webpackConfig.resolve.alias = config.alias
cooking.config = webpackConfig

cooking.set({
    entry: './src/index.js',
    externals: config.pkg
});

cooking.remove('output.publicPath');
cooking.add('output.filename', 'amaze-ui.common.js');
// WARNING in asset size limit: The following asset(s) exceed the recommended size limit (250 kB).
// This can impact web performance.
cooking.add('performance.hints', false);
cooking.add('output.libraryTarget', 'commonjs');
cooking.add('output.library', 'AMAZE');
cooking.add('output.path', path.resolve(__dirname, '../lib'));

module.exports = cooking.config;