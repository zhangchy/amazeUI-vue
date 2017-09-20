var px2rem = require('postcss-px2rem')
module.exports = {
  preserveWhitespace: false,
  buble: {
    objectAssign: 'Object.assign',
  },
  postcss: [
    require('autoprefixer')({
      browsers: ['last 3 versions']
    }),
    px2rem({remUnit: 100})
  ]
}
