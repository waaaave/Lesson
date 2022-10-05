- key   为什么不能用index?
    1. demo展示
    2. 表述
        - 使用index作为索引会降低diff 的性能， 不能用
            比如在列表中做shift操作时，diff 收集patches的工作有:
                - 原有的所有节点都要做修改(文本)操作
                - 新增节点
                - 调整顺序
            如果用唯一值key
              只需要进行的工作：
                - 新增节点
                - 调整顺序

        - 还会出其它问题，当非push操作，即列表节点索引发生改变时，
            会使用错误的patch更新
            当列表中有input 的时候，输入值会出错



- 虚拟DOM是什么？
    是一个js对象，在内存中描述html结构

- 虚拟DOM的价值？
    1. 提升了页面响应速度
        通过dom diff可以一次性收集patches， 进行页面局部更新
    2. 面向虚拟DOM编程 (不咋是面向HTML编程 render)
        不用去管底层DOM API , 只要关注业务开发(响应式+hooks)
        平台无关性 开发者只需要做 react 编程(reactive, 数据流) patches -> html/小程序/app/物联网设备....
        - 真实DOM只能在浏览器内运行
        - 虚拟DOM(js 对象(节点，属性，children))，可以在任何有js解释引擎的地方运行(v8引擎) 
        taro  h5 webapp  ios/android
        react-native   react做app

- JSX   
    react 被表扬的UI 写法， 带来的是声明式的UI编程
    需要在模板里嵌套， {} 编译  有组件的嵌套
    JSX浏览器无法直接运行，通过babel转译  JSX -> babel -> @presets/react -> React.createElement(tag, props, children)

- diff算法
    - 第一次渲染 1 JSX + state => 2 虚拟DOM  (JS对象) => 3 浏览器/平台 UI结构
    - 更新操作时 重新渲染组件，得到新的虚拟DOM树
    - Diff算法介入 新旧虚拟DOM 比对， 在内存中，比真实DOM快很多，得到 patches 统一更新真实DOM
    - 更新时：
        1. 组件中代码重新执行 (依赖)
        2. 重新生成新的虚拟DOM对象
        3. 进行diff
    - 进行diff时，为了更快，有些规则：
        1. 