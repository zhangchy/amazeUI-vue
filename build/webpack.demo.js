var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./webpack.base.conf.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var cooking = require('./cooking.js');
var config = require( './config.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

webpackConfig.plugins.push(
  new ExtractTextPlugin("[name]/styles.css"),
  new HtmlWebpackPlugin({
    template: './examples/index.html',
    filename: 'index.html',
    inject: true
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"development"'
  }),
  new webpack.HotModuleReplacementPlugin()
);
webpackConfig.resolve.alias = config.alias;
cooking.config = webpackConfig;
cooking.set({
  devtool: '#cheap-module-eval-source-map',
  output: {
    path: path.resolve(__dirname, "../examples/dist"),
    filename: 'bundle.js'
  },
  /* devServer:{
    port: 8000,
    historyApiFallback:true,
    hot:true,
    inline:true
  }, */
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '../examples/entry.js')
  ]/*,
  externals: config.pkg*/
});
webpackConfig.resolve.alias = config.alias;

cooking.add('loader.js.exclude', config.jsexclude);

console.log(cooking.config)
module.exports = cooking.config;
