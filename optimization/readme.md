1. 从URL到显示页面，网络层面会有那几个过程
  - DNS 解析
    domain --解析--> ip
    本地配置 host
    本地缓存 
    运营商缓存
    dns服务器

  - TCP/IP
      优化不属于前端擅长的范围
  
  - http请求响应
    前端可以优化的

2. 请求优化
  网页 
  减少请求次数
  img
    字体图标 base64
  css
    webpack minify
    一个入口 --> 出口打包成一个文件
  script
    minify 打包 资源的合并
  
  - webpack 有哪些缺点
    1. 提升打包速度
      提升babel打包速度

  - 何为文件依赖？ 如何整理依赖关系
    entry index.js 依赖 lodash
    会把 lodash -> babel-loader -> babelrc -> preset 转义 不需要
    避免掉node_modules babel-loader

  1. lodash 没必要编译