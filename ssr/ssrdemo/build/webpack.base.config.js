// webpack 插件 可以吧HTML文件作为模板

const { resolve } = require('./utils')
console.log(resolve('app/main.js'));

module.exports = {
  mode: 'development',
  entry: {
    main: resolve('app/main.js'),
    // vendor: [
    //   'react',
    //   'react-dom'
    // ]
  },
  output: {
    path: resolve('dist'),
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: resolve('app'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },
  // 代码分离 code splitting
  optimization:{
    splitChunks: {
        cacheGroups: {
            vendor:{//将第三方库拆分出来
                name:'vendor',
                test:/[\\/]node_modules[\\/]/,
                minSize:0,//最小大小设置成0，把所有的依赖都给提取出来变成独立的bundle
                minChunks:1,//模块至少使用次数,当值为2时，代表只引用了一次的模块不做分割打包处理
                priority:10,//值越大优先级越高
                chunks:'initial'
            }
        }
    }
}

}