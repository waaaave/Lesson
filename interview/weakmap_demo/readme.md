- 介绍一下es6 
    - 企业级开发大型语言
        1. class + super + extends面向对象 + 设计模式 还是原型式的语法糖
        2. 模块化  es6 模块化
        3. 新的数据结构 map() (O(1)查找) set(去重)
            - weakMap 和 Map 区别
                1. weakMap的key一定是对象
                2. weakMap的对象key之间是弱引用关系
            - 深拷贝循环引用的处理使用的是weakmap
            - promise手写高级会使用weakMap
            - 垃圾回收相关
        4. 块级作用域 --- let const
        5. 新的数据类型 symbol Bigint
    - 可读性和代码优雅
        箭头函数······
    - 异步解决方案
        1. promise
        2. generator
        3. async await

- global.gc
    垃圾回收机制运作
    ？？？
    1. 哪些内存空间可以回收？
        - 计数引用
        - 标记清除

- process.memoryUsage()