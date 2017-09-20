/**
 * 描述: 生成commonjs模式
 * 作者: 张春燕 2017/8/29 15:38.
 */
var path = require('path')
var config = require('./config')
var px2rem = require('postcss-px2rem');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: './src/index.js',
  externals: config.externals,
  output: {
    path: path.resolve(__dirname, '../lib/common'),
    filename: 'MAV-UI.common.js',
    libraryTarget: 'commonjs',
    library: 'AMAZE'
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
      filename: 'MAV-UI.css'
    })
  ],
  module: config.module
}
