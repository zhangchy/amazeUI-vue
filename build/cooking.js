/**
 * 描述: webpack基础配置
 * 作者: 张春燕 2017/8/30 9:32.
 */
'use strict'
const merge = require('../src/utils/merge')
module.exports = {
  config: {},
  set (config = {}) {
    merge(this.config, config)
  },
  add (key, value) {
    let keys = key.split('.')
    let current = this.config
    keys.forEach(function(item, index){
      if (index === keys.length - 1) {
        current[item] = value
      } else {
        current[item] ? false : current[item] = {}
        current = current[item]
      }
    })
  },
  remove (key) {
    let keys = key.split('.')
    let current = this.config
    keys.forEach(function(item, index){
      if (index === keys.length - 1) {
        delete current[item]
      }
    })
  }
}
