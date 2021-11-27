- 使用styled-components界面组件开发
  1. 项目开发的步骤， 第一步 styled-components
    - reset css
    - icon
    - header,footer tabber

- 使用 react-router-config 优化路由配置

- 懒加载
  img 每一个都要做http请求 可以使用 lazyload
  首页图片太多，全部请求的话很慢
  随着滚动加载

- 切页面 
  静态 styled-component
  动态 react-router Link redux banner+list/api
  node music -> api  -> store connect(mapstate, dispatch) -> applications <-router

- 使用 TabItem 父子样式组件，思路来源于antd源码

- connect 联上provider
    redux本质就是让数据可以跨层级跨页面的共享，随时随地
    provider mapstate可读  mapdispatch 怎么action
    在connect同时 把（mapStateToProps,mapDispatchToProps）（recommend） 作为高阶函数
    Recommend props mapState 作为子组件
    向外输出组件

- DOM 树 
  组件树
  store