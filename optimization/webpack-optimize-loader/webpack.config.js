const path = require('path') //node内置路径模块
const basePath = __dirname
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(basePath, 'src'),
  resolve: {
    extensions: ['.js']
  },
  entry: {
    app: ['./index.js'],
    vendor: [
      'lodash',
      'react',
      'react-dom',
      'react-router',
      'redux'
    ]
  },
  output: {
    filename:'[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin()
  ]
}