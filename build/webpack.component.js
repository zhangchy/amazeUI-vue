/**
 * 描述: 组件打包
 * 作者: 张春燕 2017/8/29 16:17.
 */
var path = require('path');
var webpack = require('webpack');
var config = require( './config.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var Components = require('../components.json');
module.exports = {
  entry: Components,
  externals: config.externals,
  output: {
    path: path.resolve(__dirname, '../lib/component'),
    filename: '[name]/index.js',
    libraryTarget: 'commonjs'
  },
  performance: {
    hints: false
  },
  resolve: {
    extensions: config.extensions,
    alias: config.alias
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      output: {comments: false},
      sourceMap: false
    }),
    new ExtractTextPlugin({
      allChunks: true,
      filename: '[name]/style.css'
    })
  ],
  module: config.module
}
