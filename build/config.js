/**
 * 描述: cooking相关配置
 * 作者: 张春燕 2017/8/29 15:54.
 */
var path = require('path');
const vueConfig = require('./vue-loader.config');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
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
  extensions: ['.js', '.vue', '.json'],
  externals: Object.assign({ vue: 'Vue' }, externals),
  pkg: Object.assign({vue: 'Vue'}, pkg),
  jsexclude: /node_modules|lib/,
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: [/node_modules/, /lib/],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, path.resolve(__dirname, '../examples/static/self-adaption.js')]
      },
      {
        test: /\.css/,
        exclude: /^node_modules$/,
        loader: 'style-loader!css-loader!postcss-loader?{ browsers: [\'last 100 versions\'] }'
      },
      {
        test: /\.less/,
        exclude: /^node_modules$/,
        loader: 'style-loader!css-loader!postcss-loader?{ browsers: [\'last 100 versions\'] }!less-loader'
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&importLoaders=1&localIdentName=[local]',
            'sass-loader?sourceMap'
          ]
        }),
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.join('static', 'img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.join('static', 'media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader?name=[name].[ext]'
      }
    ]
  }
}
