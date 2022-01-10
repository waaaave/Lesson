- 三元套路
    1. redux 放在pages/目录下
        数据驱动界面
    2. 切页面 样式组件
    3. 路由配置 react-router-config 数组 动态加载组件
    4. better-scroll load... common组件
- 转移到自己的项目
    业务打理经验

- 首页开发套路
    切页面 == 组件化
    1. 组件思路
        connect()(search + scroll(组件化) + tabBar)  
    2. 后端api  mockjs koa 两者都有

- 页面引入Scroll
    Scroll > div
- 组件化， 做一个组件
    1. 数据怎么来
        koa
    2. scroll
    3. 写组件切页面

- 三元页面模板
import React from "react";
import { connect } from "react-redux";
import Scroll from '../../baseUI/scroll/index'

// import './Server.style.js'

const Server = (props) =>{
    const { category } = props
    return (
        <>
            <Scroll
                direction="vertical"
                refresh={false}
            >
                <div>
                    Server
                </div>
            </Scroll>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        category: state.server.category
    }
}

export default connect(mapStateToProps, {})(Server)

- swiper 组件打理流程
    1. 安装相应版本的swiper
    2. 引入swiper 及样式
    3. 固定的html结构 .swiper-container>(.swiper-wrapper>.swiper-item)+.swiper-pagination
    4. useEffect 实例化Swiper

- 电商menuBar
    1. swiper 提供了swiper-bar形式
    2. 使用容器组合组件
        menubar swiper
        menuBarItem
    3. flex 每行交给复用的组件
    4. 数据结构设计

   
    电商 menubar
        1.swiper 提供了swiper-bar 支持左右滚动
        2.使用容器组合组件，
            menubar swiper
            menubarItem 菜单
        3.flex
        4.数据支持ok
    
    tabbar 切换部分
        1.二级路由构建，组件动态路由落地设计
        2.
        3.
    
    search 组件周边
        点击后  
    

    注：
    1. 雪碧图： 一整张包含所有tabbar的图片，用一张大图片通过裁减不同位置代替一堆的小图片 虽然体积大了，
    但是有效的减少了请求数(是google十年前的页面性能优化利器)
    webpack打包：tabbar图片 webpack 打包自动转成base64 就可以放在css文件上，不用在请求数据了
    2.状态丢失问题
        1.刷新页面store 回到初始值
        2.localstorage
        3.用户可以从任何一个路由进来    分享



    # 项目考点 做局
    1.性能优化部分
        路由    懒加载
        组件memo   公式：connect(mapStateToProps,mapDispatchProps)(Memo())     补全：（useMemo和usecallback）
        lazyload 懒加载图片
    
    2.样式组件  swiper
    3.better-scroll
    4.组件化风格
    4.hooks编程风格 比如在tabbar切换时用了useLocation
    
- 首页长列表业务怎么做
    1. 后端 ctx.request.query {limit, page}
    2. mockjs Mock.mock 20
    3. 页面可以用redux（数据流处理的一致性） 或usestate（） mvvm
    4. 列表图片的性能优化
      react-lazyload
      包装img placeholder
    5. betterscroll scroll onScroll
      react-lazyload forceCheck