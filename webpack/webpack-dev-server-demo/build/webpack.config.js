const webpack = require('webpack')
const path = require('path')
const DIST_PATH = path.resolve(__dirname, '../dist')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: DIST_PATH,
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
            
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    devServer: {
        hot: true,
        port: 8081
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            hash: true
        })
    ]
}
