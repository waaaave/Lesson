- 块级元素
    `div p form he table h1-h6 dl dt dd ul ol`
    - 默认独占一行， 从上往下进行流体布局
    - 可以设置宽高，默认父元素的100%
    - 一般作为容器元素，遵循盒子模型所有规则

- 行内元素 
    `inline a span label i strong b em`
    - 和其他元素在一行
    - 元素的宽高以及顶部底部边距不能设置
    - 元素的宽度为它包含的文字以及图片的宽度，不能改变

- 行内块元素
    `input img`
    - 和其他元素在一行内
    - 元素的高度宽度以及顶部底部边距可以直接设置 
    - 有个bug 
        `行内元素列式布局 1. 消灭换行符  2. 父元素fontsize0，子元素重新设置 3. flex 4. float 5. margin负值`

- 行内元素变块级元素的方法
    1. display:block
    2. float
    3. flex
    4. position flexed/absolute

- css 盒模型
    1. 由内到外
        content padding border margin 
        默认content box ,移动端设置为border-box
        内置padding的元素 ul li
        padding 不支持负值，用于增大点击区域

- float导致父元素高度坍塌
    原因是脱离了文档流
    - 父元素生命为BFC
        over-flow : hidden 是性价比最高的
    - 写死父元素的高度
        但是子元素不能撑起父元素
    - 清除浮动
        结尾使用 display:block clear:both
        伪元素 可以不会影响原有的结构

- 响应式布局方案
    - px 视窗(scream)
    - 百分比
    - em
    - rem
    - vw/vh
    - 媒体查询

    - px 像素 css像素 物理像素
        1px不是固定的

    - css 中的像素(css像素) 由什么决定？
        css像素 为web开发者提供一个抽象单位
        物理像素只和硬件的密度相关 相同密度的物理像素是一样的

    - css 像素如何转化为物理像素？ 等比例显示

    - viewport
        device-width 多变有 PC PAD 等多种设备
        设计稿是不变的

        DPR(像素密度比 Device pixel ratio) 设备像素比

    - 媒体查询
        media query

        @media screen & (max-width : 480px){
            body {
                background: #63f
            }
        }


    - 502 和504 区别
        5xx服务器端错误
        - 迟迟不响应 数据库
            504 Gateway Timeout
            多台数据库服务器 就需要一个同步机制
            中间件  数据库连接中间件 需要一个 timeout 配置

        - java/node/php 等后端错误 
            502 Bad Gateway
            js 是单线程的 挂了就停了
            服务器是多线程的，多核cpu （node中那个模块 使之支持多核运行 cluster）
            nginx 负载均衡还有代理
            https 默认端口号 443

    - 类型
        1. 深入了解JavaScript的基础类型和引用类型
        2. 隐式类型 遵循强制类型转换原则

        == 转换规则
        1. 数字和字符串 字符串 -》 数字
        2. boolean和其他 boolean -》 数字
        3. 对象和基础类型 对象-》primitive
        4. 对象之间引用同一个 true否则false