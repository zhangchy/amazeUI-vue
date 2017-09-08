/**
 * 描述: webpack内容构建
 * 作者: 张春燕 2017/8/30 16:58.
 */
/* const WebpackDevServer = require('webpack-dev-server'); */
var ora = require('ora');
var chalk = require('chalk');
var webpack = require('webpack');
var webpackConfig;
switch (process.env.BUILD_ENV) {
  case 'COMMONJS':
    webpackConfig = require('../webpack.common.js');
    break;
  case 'UMD':
    webpackConfig = require('../webpack.umd.js');
    break;
  case 'COMPONENT':
    webpackConfig = require('../webpack.component.js');
    break;
  case 'DEMO':
    webpackConfig = require('../webpack.demo.js');
    break;
}
var spinner = ora('building for ' + process.env.BUILD_ENV + '...');
spinner.start();
webpack(webpackConfig, function (err, stats) {
  spinner.stop();
  if (err) throw err;
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n');
  console.log(chalk.cyan('  Build complete.\n'));
  console.log(chalk.yellow(
    '  Tip: built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
  ));
});
