- 宏任务
    script 、 setTimeout 、setInterval 、setImmediate 、I/O 及 UI rendering
- 微任务
    process.nextTick(promise.resolve() ) 、queueMicrotask、promise.then 、MutationObserver

- 线程(保证js 的简单， 异步任务在执行栈栈空时检查) + 执行栈(js的执行机制， 函数入栈)
- script 作为第一个宏任务 先执行 执行栈为空后 
- 微任务队被清空执行 如果有必要就渲染页面 
- 然后执行一个宏任务
- loop

- this问题
    - this由调用方式决定
    1. 作为普通函数调用this， 不管在哪里调用指向全局
        使用严格模式的话就是undefined
    2. 作为对现象的方法调用， this指向对象
    3. new 的方式调用指向生成的实例
    4. 箭头函数没有this， 取决于包裹箭头函数的第一个普通函数， 且之后不能改变this指向
    5. call apply bind 可以指定函数的this，参数为空就指向全局，如果多次bind，指向第一次bind
    6. this 优先级
        箭头函数
        new > obj.foo() > foo
        bind call apply