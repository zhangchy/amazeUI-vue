/**
 * 描述: 组件打包
 * 作者: 张春燕 2017/8/29 16:17.
 */
var path = require('path')
var webpackConfig = require('./webpack.base.conf.js');
var cooking = require('./cooking.js');
var config = require( './config.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
webpackConfig.plugins.push(
  new ExtractTextPlugin("[name]/styles.css")
)
webpackConfig.resolve.alias = config.alias
cooking.config = webpackConfig
var Components = require('../components.json');
cooking.set({
    entry: Components,
    externals: config.externals
});

cooking.remove('output.publicPath');
cooking.add('output.filename', '[name]/index.js');
cooking.add('output.libraryTarget', 'commonjs');
cooking.add('output.path', path.resolve(__dirname, '../lib'));
module.exports = cooking.config;
