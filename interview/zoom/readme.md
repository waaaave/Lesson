- let const 应用场景
    1. 函数内部变量可能覆盖外层变量， let不会 因为有暂时性死区
    2. 循环绑定时， let块级作用域 闭包 i 的值
    3. const 用于声明一些常量
    4. 不会污染全局对象
    5. 先声明后使用
    6. 节省内存

- 项目介绍

- 前端优化
    - 使用缓存
        1. 强缓存
            清除缓存， 立即更新
            bundle.js Cache-Control Max-Age
            bundle.js?v=20  加版本号
        2. 协商缓存

    - react 组件优化

    - css
        1. css放头部

    - js
        1. 防抖节流 ajax suggest 使用 scroll resize 等事件
        2. js 文件放底部

    - 网络层
        1. 减少HTTP请求
            图片： 多文件合并， 图片懒加载， 雪碧图， iconfont ， SVG移动端适配， base64, linear-gradient，
        2. gzip
        3. 协议
            （http1.1之前是明文传输 一个 TCP 只能传输一个请求 会有一个结束符号保证TCP的 KEEP ALIVE）
            HTTP2.0 多路复用 使用了 帧方式流传输 
        4. CDN
            HTTP 2.0 多路复用
            静态资源不需要
        
    - 图片
        优化图片质量 webp
    
    - webpack
        /node_modules/ exclude 打包提速的核心
        图片base64 url-loader减少请求
        vender 把使用到的类库单独打包