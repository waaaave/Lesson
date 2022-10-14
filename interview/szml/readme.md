1. csv -> json
    csv就是数据库的关系型数据库导出的文件
    - 数据库导出文件格式 txt/html
        text/csv
    - 文件的第一行是类似于tabel column
    - 每一行都是\n结束
    - 每一列以，隔开
    1. 先拿标题
    2. 再拿行
    3. map -> key,value

- 从url到页面显示，浏览器做了什么
    - 网络层
    - 页面渲染
        - 线程/进程
        - 多线程/多进程
        - 浏览器的主要进程
        - 浏览器为什么是多进程
        - 渲染进程Renderer的主要线程
            进程  分配资源的最小单元 进程间是独立的
            进程 == 程序 + 内存 + 硬盘。。。 资源的总和
            线程 执行的最小单元 线程之间可以通信
            进程和线程的关系 --> 进程管理多线程
            - GUI渲染线程（页面绘制）  
            - js 引擎线程  （单线程）
            - 事件触发线程
            - 定时触发线程
            - 异步http请求线程
        - 浏览器包含的进程
            1. browser进程 浏览器主进程 负责浏览器界面显示，用户交互，各个页面的管理/创建/销毁， 网络资源管理下载
            2. 第三方插件进程
            3. gpu进程 3d/动画的绘制
            4. 渲染进程 俗称浏览器内核 页面渲染，脚本执行，事件处理 每个tab都有一个，互不影响