/**
 * 描述: 生成umd模式
 * 作者: 张春燕 2017/8/29 15:38.
 */
var path = require('path')
var webpackConfig = require('./webpack.base.conf.js');
var cooking = require('./cooking.js');
var config = require( './config.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
webpackConfig.plugins.push(
  new ExtractTextPlugin("styles.css")
)
webpackConfig.resolve.alias = config.alias
cooking.config = webpackConfig
cooking.set({
    entry: './src/index.js',
    externals: config.externals
});
cooking.remove('output.publicPath');
cooking.add('output.filename', 'index.js');
cooking.add('output.libraryTarget', 'umd');
cooking.add('output.library', 'AMAZE');
cooking.add('output.path', path.resolve(__dirname, '../lib'));
module.exports = cooking.config;
