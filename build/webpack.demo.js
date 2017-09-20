var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require( './config.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const isBuild = process.env.BUILD_ENV === 'DEMO'

var config = {
  devtool: isBuild ? false : '#cheap-module-eval-source-map',
  output: {
    path: path.resolve(__dirname, "../examples/dist"),
    filename: '[name].bundle.js'
  },
  entry: [
    path.join(__dirname, '../examples/entry.js')
  ],
  resolve: {
    extensions: config.extensions,
    alias: config.alias
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './examples/index.html',
      filename: 'index.html',
      inject: true
    }),
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new ExtractTextPlugin({
      filename: 'common.[chunkhash].css'
    })
  ],
  module: config.module
};

if (!isBuild) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin(), new FriendlyErrorsPlugin());
} else {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      output: {comments: false},
      sourceMap: false
    })
  );
}
module.exports = config;
