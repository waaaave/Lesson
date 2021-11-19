# react 项目实战

  - react知识点的学习
    react、react-router 、redux文档

  - 技术胖

  - react实战

  - github 找一个react电商带首页的源码
    高维打低维

  - 电商首页
    导航组件 
      nav>ul>li
      纯css交互 :hover

    右边显示出一个组件（三部分）
    <IndexNavPane nid={1-10} hiden = {isIndexNavPaneHidden}>
      - <HeadNavPane nid={1-10} />  -> 子组件
        - <QuickNavItem title link>
        - 数据在哪？
          一部分放在配置文件中（config）
            {
              menus:[{
                "tts":"图书 童书",
                nid:1
                childern:[{
                  quick:[{
                    id:11,
                    title:'图书馆'
                    link:'#'
                  }],
                  subMenu:[{

                  }],
                  logos:[{

                  }]
                }]
              }]
            }

- Layout 
  不要用antd
  在APP中使用Layout封装

- 左侧的侧边栏 利用组件 用什么技术方式
  1. 切页面 
  <!-- 2. styled-component -->
  3. 组件

- 请介绍一下你的项目
  1. 本项目的样式采用styled-component来进行开发