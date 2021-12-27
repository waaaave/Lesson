react vue 

react 是单向数据绑定 ， vue 是双向数据绑定

Input Form 组件 受控组件
  dataList = [{
    id:1,
    name: 'dddddd',
    isAdded: true
  }]

  const dataList[i].isadded = !isAdded

  setDataList(
    dataList
  )

1. table 
  逻辑复杂
  rows button onClick="doAdd.bind(null, item.id)"
  <button>{btnText}</button>


- 给项目添加Swiper功能的顺序
  1. 安装swiper 相应版本
  2. 把他放到components 或common 目录下
  3. 使用styles-cimponent 容器样式
  4. 引入 swiper + swiper.css
  5. 循环输出 jsx + key 唯一设置
  6. swiper 有固定的html结构和类名约定
  7. useeffect dom 挂载后， 实例化swiper组件(JS组件 手势， 切换功能)

- 样式做法和思路
  react 本身没有 vue 对 css 的模块化支持的那么好
  react css 模块化 --> css in js 方式， style.js
  其中 styled-component 是 css in js 的以照顾受欢迎方法
  1. 使用createGlobalStyle reset icon 等全局样式， 在app组件内， 业务组件上引入
  2. 在assets、style.js中定义风格文件， 比如说各种规格的字体，色调等
  3. 切页面变成写样式组件

- 列表样式组件的开发思路
  三层结构
  1. 容器+标题（负责上下间隔，列表标题样式）  ListWraper
  2. list 弹性布局
  3. listItem 每个项目的具体样式

- 组件的种类
  1. 页面级别组件 applications views pages
  2. 组件  构成页面级别的 components
  3. 跨页面通用组件 common baseUI

- 移动端 水平和垂直 高质量的滚动
  better-scroll 有阻尼感的 better-scroll 下拉刷新，上划加载更多

- redux 如此理解
  1. 数据流管理
    管理 状态的读操作 写操作
    Store -> reducer -> state.recommend
    写 action -> api -> dispatch -> rereducer -> MVVM
  2. 数据流
    按模块化管理
    src/store 单一状态树 返回单例（数据同步正确）， 启动 redux-dev-tool
    中间件（redux-thunk（异步））
    分舵 application/recommend/store 向外暴露reducer函数
    - 一个模块一个函数
    - 数据分三层 根 -> 模块 -> 节点状态

- redux 调试流程
  1. redux-dev-tools 已经打开
    composeEnhancers 启动 redux dev tool + store 下至少有一个reducer函数
  2. 页面级别路由中使用 connect 高阶组件， connect（）（原来UI组件）
  3. mapStateToProps state -> module -> 状态叶节点
  4. 原来的UI组件会通过props 拿到组件树中的状态 只读的状态

- 修改状态流程
  1. 页面上 映入当前模块的action函数代替原有的函数去取数据或更新
    useState + useEffect
    dispatch action 来自action文件
  2. 异步的action  返回一个带有再次dispatch action能力的函数
  3. 调用api里面的方法， dispatch 一个同步的action
  4. action的格式是{type：actionTypes。CHANGE_BANNER， data：‘’}
    recommend/CHANGE_BANNER
  5. reducer 重新计算， state 状态更新 界面MVVM 
  6. 数据的修改很容易出现不同步  redux 推出数据修改流程就是只有action才能请求数据
    -> action -> api -> action -> 对象{type:,data/payload:} -> reducer -> 匹配准备好的规则