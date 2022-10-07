- js防抖节流
- css减少重绘重排
- useMemo + useCallback
    为什么要自定义hook
    - 将useState useEffect 封装， 复用响应式组件
        useRequest
    - 将useMemo useCallback 封装到 hook， 提升组件的性能
- 减少不必要的渲染
    为什么不用memo会重新渲染？
    1. 本质上react是从上到下 递归更新
        <ChildNonTheme/> 被babel 编译成
        React.createElement(ChildNonTheme)
        const ChildNonTheme = {
            type: 'ChildNonTheme',
            props: {}
        }
        每次调用父组件函数更新时， 重新生成一遍
        - React.memo
        - 巧妙利用children属性
            由于children从外部传入，所以内部不会再有创建的代码
            所以重新渲染后不会改变

        - 多context 读写分离
            1. 每个Context 对象都会返回一个Provider React 组件 允许消费者订阅 context 的变化
            2. 当provider value 发生变化的时候，他内部的所有消费组件都会重新渲染
            把一个读写的Conext 拆成两个