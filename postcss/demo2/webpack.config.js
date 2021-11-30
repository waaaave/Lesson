var webpack = require('webpack'); // 前端项目打包总负责
var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
// react 每个组件都是一个文件  是为了组件化  可读性很好
// js 文件打包在一起

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use : [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename:'[name].css',
      chunkFilename:'[id].css'
    })
  ]
}