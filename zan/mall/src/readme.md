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

import React from 'react'
import { connect } from 'react-redux'
import Scroll from '../../baseUI/scroll/index'

const Info = (props) => {
    const {  } = props

    return (
        <>
            <Scroll
                direction="vertical"
                refresh={false}
            >
                <div>
                    Info
                </div>
            
            </Scroll>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
    }
}
export default connect(mapStateToProps, {})(Info)
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

- 项目考点 做局
  1. 性能优化
    路由 懒加载
    组件 memo connect(mapStateToProps, mapStateToDispatch)(memo(Component))
    lazyload 图片
    雪碧图 用一张大图片代替一堆的小图片， 虽然体积变大了但是有效的减小了请求数
      base64 图片webpack 打包时自动转换 放在css 文件中 
      这是 Google 十年前的页面性能优化利器 一个网页一张图
      base64 也是Google发明的
      过时了
  
  2. 样式组件

  3. better-scroll

  4. 组件化风格

- 页面 路由
  1. 路由页面级别组件 spa
  2. 页面可以有多个模块
  3. 路由 / 模块 / user / posts
    子模块
  4. 多级路由设计方案
    /home /home/my /home/server 路由多模块
    一级路由 整个页面都是他的 除非有 layout
      /home Tabbuttom  component 
        tabbar 的空间有了
        /home/Main
          二级路由 这个页面
  5. 提前设计页面模块与路由的关系

- tabbar 切换功能
  1. 高亮
  2. 路由
    1. SPA
    2. 匹配
    3. 匹配完成之后 组件落地
      route.renderRoutes()
    - 分开来的路由
    - router