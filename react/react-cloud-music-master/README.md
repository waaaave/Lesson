- 项目的运行
  1. 安装依赖，启动
  2. api改为3300

- 全栈react项目 
  1.API不用写 用的第三方sdk
    http跨域请求 
  - 是为了前后端分离 是为了独立的前端路由可以用
    前端用react-router-dom
    后端用 express.Router

  - 职责分离模式
  - www.baidu.com
  - api.baidu.com

- 项目架构
  src开发目录 webpack context 上下文环境
  - api
    songs 不能是内在数据 -> store 中央数据仓库 ->  reducer -> dispatch action
    -> api -> backend(:3300/personalized)

  
  - bannerList [] -> 有数据 整个流程是怎么样的
    config.js axios 配置 -> api/request.js/getBannerList ->  ：3300/banner  url
  
  getBannerList -> store/action -> dispatch(action ) {tyoe:'',data : []} -> reducer 重新计算

  defaultState = {
    bannerList:[]
  }
  swich(){
    case:
      bannerList:action.data
  }