- 了解过 PWA 混合开发 统一UI多段框架吗？ 原理是什么?

  一份代码使用对应的编译脚本， 生成多端应用 taro npm run  列表就知道了
  开发效率高 成本低  拥抱更多流量

  - js工程师 有全栈能力 (js + node )
    webassemble(有做前端代码的能力) 把 go/Rust --》 js
  1. react-native  Android/ios 应用 
      react + antd -> Android/ios 手机 一样的效果
    react-native 可以把程序打包成 apk 或者 ios 文件 还可以使用手机联系人api等硬件能力
      优势： 一份代码 解决多端问题
  2. Taro 多端小程序
    不是多个平台，是多个厂家
    div -> view(多端UI) ---网页---> div ---安卓---> container ...

    UI是可以多端多厂家共用的 得益于编译
    @taro/ui

  3. unionapp

  4. electron html/css --带给--> 桌面端
    小程序做的 操作系统的统一

  5. 虚实之间
  JS = 前端 + 全栈 + 移动端 + 物联网 + 桌面工程师

  小米在推  快应用  在小米中支持以小程序发布应用
  ===> 统一前端

  - taro 将react 技术栈带入小程序
    1. weapp 组件化 lowb
      Component 语法怪异 有学习成本
      react 是必学的 
    2. 将数据流引入 redux useReducer
      大型应用更适合 京东到家

- @tarojs/component 基础组件 适配
- taro-ui 业务组件 60%-70% 提供