# 如何介绍自己的项目?
  使用数据流管理redux 精细化完成登录功能
  1. 使用js-cookie 造作cookie-token 

- utils 业务工具模块
  auth 业务 
  localStorage token   ||  cookie
  userInfo 对象存储

- js-cookie 
  方便的进行cookies设置
  str  c盘特定文件
  json => util 封装一下

- mockjs 做接口模拟
  1. 每个接口模块文件做数据模拟  用户/user  文章/posts
  2. Mock.mock (url)， 方法的设计 Mock.mock(/\/login/, 'post')

- api 打理流程
  api/login.js reqLogin post 请求体 {username:'admin', password:'123456'}
  axios 封装的 request

- mockjs 模拟登录token授权
  1. 如果成功的话status是0 有问题才是1 状态码是statusCode：202
  2. 后台要准备多权限admin editor guest 

- 整个流程走向
    useeffect， connect(action) <-> api reqLogin <-> request(通用) <-> Mock.mock(dev) || backend pro 再返回

- 后台管理系统路由
  <Route path='/' component={Index}> 由原来的组件
  <Route path='/' render={() => {
    更加复杂
    加判断
    return<></>
  }}> 

- 容器类组件
  Table  Form  Layout

- Layout 首页打造技巧
  先模块化
  1. Sider return Layout.Sider menu

- 后台Layout打理， 最忌讳的是一点点组件搭建
  1. 侧边栏
    Layout.Sider
  2. header
    Menu SubMenu 一级菜单 二级菜单
  3. Content {{width:calc}}
    <Route>
  4. 抽屉
    全局状态驱动 打开

- antd 布局的理解 
  1. Row + Col
  2. Layout
    后台Layout 先左右 Sider + Layout
    上中下结构 Header + Content

- redux 驱动状态 组件间

- 后台会有50+ 100+页面
  设置标题这个细节 react-document-title --> ahooks useTitle