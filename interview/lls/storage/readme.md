- hooks 钩子函数 无状态
    - 封装
    - 复用  自定义组件

- useLocalStorage
    - useState useEffect 等 hooks 封装进去 并且返回对象 供函数值组件调用
    - 复用

- useRef 的高级功能
    - 不用于dom的获取 用于缓存值
        1. setState 是不是异步的
            useRef {current：null}