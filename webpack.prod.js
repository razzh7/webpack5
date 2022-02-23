const { merge } = require('webpack-merge');
const coomon = require('./webpack.common.js');

module.exports = merge(coomon, {
  mode: 'production',
  devtool: 'source-map' // 生产环境下开启，线上环境错误准确定位
})