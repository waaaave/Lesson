-  工程化
    1. webpack
        - 企业级工程套件
    2. bable
    3. stylus
    4. vite
        <script typr = 'module'></script>
        现在绝大多数浏览器支持 es modules
-  vite 为什么那么快
    1. webpack 工程化早期 浏览器没有普遍支持
    2. 项目启动30s以上， 修改代码2s以上，工程化性能优化
        vite只要一秒
    3. webpack使用的构建工具的node
        vite使用的是go
    4. 不用打包
        webpack bundle 一切都可打包
        vite 开发阶段不用打包
        很多工作交给了浏览器
        最后还是要打包， dist/bundle.js
        打包用的是 Rollup 打包 

- 打包流程到底是怎么样的
    1. 从入口文件开始 enter.js
    2. 分析依赖以及编译需求
        es6 -> es5
        打包顺序
        css文件加载 将文本打包成 <style>cssText</style>
