// 开发阶段工程化配置文件, 
// base + dev
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const { resolve } = require('./utils')

module.exports = merge(baseConfig, {
    devServer: {
        port: 8000
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: resolve('template/app.html')
        })
    ]
})
