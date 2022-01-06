- 三元套路
  1. redux 放在pages/模块中
    数据驱动界面
  2. 切页面时的样式组件
  3. 路由配置 react-touter-config 数组 动态加载组件
- 转移到自己的项目
  业务打理经验

- 首页开发套路
  切页面 == 组件化
  1. 组建思路
    connect()(search + scroll(memo, Lazyload, 组件化) + tabbar)
    api mockjs koa

- 页面引入Scroll,
  Scroll>div

- 组件化 做一个组件
  1. 数据怎么来  
    koa 提供数据
  2. Scroll
  3. 写组件， 切页面

- 三元页面模板

```

import React from 'react';
// import './Server.style.js'
import { connect } from 'react-redux';
import Scroll from '../../baseUI/scroll';


const Server = (props) => {

  const { category } = props

  return (
    <>
      <Scroll
        direction={'vertical'}
        refresh={false}
      >
        <div>
      Server
        </div>
      </Scroll>

    </>
  );
}

const mapStateToProps = (state) => {
  return {
    category: state.server.category
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    getMainDataDispatch() {
      dispatch(actionTypes.getServerData())
    }
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Server);
```

- swiper 组件打理流程
  1. 安装响应版本的swiper
  2. 引入swiper 及样式
  3. 固定的html结构 .swiper-container > (.swiper-wraper>.swiper-item)+.swiper-pagenation
  4. useEffect 实例化Swiper

- 电商 menubar
  1. swiper 提供了swiper-bar 这种形式
  2. 使用容器组合组件
    menubar swiper
    menubarItem 菜单
  3. flex 每行交给复用组件
  4. 数据设计 OK

- 金蝉脱壳
  1. 不像展示的功能直接截图，放到assets目录下
  2. 切页面组件