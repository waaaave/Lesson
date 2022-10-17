const path = require('path')
const { CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: {
        main: './src/index.js',
        vender:['react', 'react-dom', 'redux']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js',
        publicPath:'/' // CDN地址前缀
    },
    module:{
        rules:[
            {
                test:/\.jsx?/,
                use:['babel-loader?cacheDirectory=true'],
                exclude:/node_modules/ // webpack 性能优化
            },
            {
                test:/\.png$/,
                // use:['url-loader'],
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            esModule: false,
                            name: '[name]_[hash:6].[ext]'
                        }
                    }
                ],
                exclude:/node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}