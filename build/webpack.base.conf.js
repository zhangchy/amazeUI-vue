var path = require('path')
var config = require('./config')
module.exports = {
  output: {
    path: path.resolve(process.cwd(), 'dist'), // process.cwd()当前脚本的工作目录
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue': 'Vue'
    }
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
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
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.join('static', 'fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
