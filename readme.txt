AMD模式:
    define和require这两个定义模块、调用模块的方法，合称为AMD模式。它的模块定义的方法非常清晰，不会污染全局环境，能够清楚地显示依赖关系。
UMD模式：
	UMD的实现很简单，先判断是否支持Node.js模块格式（exports是否存在），存在则使用Node.js模块格式。再判断是否支持AMD（define是否存在），存在则使用AMD方式加载模块。前两个都不存在，则将模块公开到全局（window或global）。
CommonJS模式：
	他们主要包含两个部分：一个名叫 exports 的自由变量，它包含模块希望提供给其它模块的对象；以及一个 require 函数，让模块用来导入其它模块的导出。

"babel-core": "^6.26.0", // ES6  代码转换器
"babel-loader": "^7.1.2", // ES6  代码转换器，webpack插件
"babel-plugin-transform-object-assign": "^6.22.0",// ES6  Object.assign方法做兼容处理
"babel-preset-es2015": "^6.24.1",// ES6  代码编译成现在浏览器支持的ES5
"babel-preset-stage-0": "^6.24.1"// ES6  ES7要使用的语法阶段
babel-register可以理解成一个小插件，将es6的东西转成es5

webpack// 用来构建打包程序
webpack-dev-server // 开发环境下，设置代理服务器
vue-loader//vue编译器 webpack插件



.babelrc // 该文件用来设置转码规则和插件
presets // 字段设定转码规则