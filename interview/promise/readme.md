- promise 要结合操作系统的那个方面
    1. 并发 concurrence (多个任务在同一时间段通过任务之间的切换来完成多任务执行) promise.all/race
    2. 并行 parallellism 多个CPU/一个CPU多个核心同时执行多任务

- js 是单线程，解决异步的问题
    - 回调 
        缺点
        1. 回调（后面的请求依赖于前面请求的结果，有依赖性）->回调地狱 可读性差
        2. 嵌套函数存在耦合性， 一旦有所改动，就要全部改动
        3. 嵌套函数太多很难处理错误  很难使用try catch不能return

    - generator（生成器/迭代器） 在函数名前带有*  还有yield
        优点：
        1. 代码的编写顺序等于代码运行顺序
        2. 代码可暂停 async await 函数中可以暂停

    - 在回调和promise之后 在async、await之前 还有generator
        1. 函数内可以停止（异步）
        2. 生成器函数要先运行，得到迭代器
        3. 开始使用next手动迭代 async不用多运行，且自动迭代
        4. next()中传的值

    - async/await 就是将函数的返回值使用promise.resolve包裹住和 then处理一样
        - async await 异步终极解决方案 
            - 优点
            处理then的调用链 
            - 缺点就
            性能比较低

    - Promise A+ 规范
        1. 封装Promise类 执行器
        2. Promise 有三个状态 pending(等待) fullfilled(完成) rejected(失败)
        3. 状态只能由pending变为fullfilled或者pending变成rejected 改变不可逆
        4. 提供resolve rejected 方法
        then
        onFullfilledCallback
        onRejectedCallback
        执行一下