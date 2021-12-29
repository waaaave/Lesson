1. 写一个项目
  先刷力扣 然后开始写项目 3h+
  react项目  + node

2. 课程
  ssr 服务器端渲染
  react 源码
  山月 面试题
  node 
  算法


ssr 应用往往是全栈开发的标配

- 目录
  1. app
    前端
  2. server 
    后端
  3. build 工程化目录
    打包

- 工程化进入主角， build 有很多的webpack配置文件
  - webpack.base.config.js
  - utils.js

- 打包的本质 从入口， 整理文件依赖关系， 按先后顺序打包
- 把 node_modules 里react 等库里文件 分离一下
  webpack 打包提速
  组件需要频繁打包，频繁发布
  code splitting之后要发布的文件就小了
  vendor.js 可以缓存

- 虚拟DOM 内存编译
  webpack 为提升编译速度， 在开发阶段， 编译到内存
  build 才生成 dist文件