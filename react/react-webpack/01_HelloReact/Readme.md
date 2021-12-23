- css 模块化过程
  1. 工程化配合
    - 在vite 项目中已经配置好了 只要更改文件名就可以了
    - webpack.config.js 这个配置文件中 加上 css-loader?modules
    - 以对象的方式输出
    - 同时在生成了随机的类名 --》 hash类名（随机不重名）
    - css-loader?modules 不好调试

  .hello-txt-8d9c1
  use: [MiniCssExtractPlugin.loader, "css-loader?modules&localIdentName=[path][name]-[local]=[hash:5]"]

- webpack 是怎么让我们看到页面的
  1. npm run 运行一个脚本 npm run start|dev  webpack-devserver --mode development
  2. 首先交给webpack 根据根目录下的webpack.config.js 文件编译
    entry main.tsx -> js 文件 bundle.js
  3. plugin 中的 htmlWebpackPlugin index.html
    引入bundle.js 通过尾部带上script 标签
    在开发阶段放在内存之中
  4. 由webpack-dev-server 启动服务 根据 devServer 部分 在某个端口启动port
    基于express 启动http服务
  5. 边写边改 hot 热更新