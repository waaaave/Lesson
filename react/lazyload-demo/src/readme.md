- Router 到底是什么? 
  他是一个单页应用的发起者
  他是声明式的，内部的路由相关操作才能生效

- Route
  如果当前链接 / 匹配了route的path字段 
  component 在他的DOM位置插入
  多级路由？ /posts/123456
  BrowserRouter
    一级路由
    <Route path='/posts/:id' />
    useHistory()  ==> params 
    postComponent
      评论列表
      翻页
    子路由
    <Route path='/posts/:id/comments' />

  - component 直接接页面级别组件
    const DemoB = lazy (() => import('./demo/DemoB'))
    高阶组件 connect memo

- Suspense + lazy 动态加载问题