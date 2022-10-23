- 水平垂直居中
    1. 我平时一把能用弹性布局 和 定位 + margin负值

- 原型和原型链
    - 任何一个对象通过 __proto__ 私有属性， 都能找到 构造函数 prototype对象 上的属性和方法
    - 如果找不到 他会沿着prototype 对象的 __proto__ 属性一直查找 一直到 Object===null 这就是原型链

    - 对象是引用类型 {}
        可以动态的添加属性和方法  JS的动态性
    - 引用类型都有一个隐式 的 __proto__ 属性， 值是一个普通的对象
    - __proto__ 指向它的构造函数的显式原型prototype
    - 如果对象上没有这个属性， 他会去他的隐式原型 __proto__ 中查找 并且沿着原型链一直查找


- useRef
    1. current 可以指向任何对象
    2. ref 指向子组件的时候 ref.current 就指向了组件对象 可以使用show() 方法
    3. useState 跨生命周期 组件函数 重新运行 值没有保存  useRef可以

- redux
    1. react + react-redux + redux-thunk 为应用提供了数据流管理， 方便安全共享全局状态
    2. redux 的好处是 UI 组件的开发更加关注UI 开发 数据流和接口业务 交给 Redux
    3. redux 由返回单一状态树的 createStore 通过 react-redux 的 Provider 组件 向应用提供store里面的状态  
    4. reducer函数 负责状态的初始化 和 修改原则， redux 就好像请了财务一样， 状态的管理更加科学严谨
    5. action 返回action  对象 reducer 重新计算得到新的状态
    6. 组件通过react-redux 提供的 connect 方法 mapStateToProps mapDispatchToProps  将 store 中的状态和方法请入组件
    7. redux 通过 combineReducer 提供 合并多个模块化的 reducer 函数 模块化数据流管理
    8. redux 本身的数据管理规则是 dispatch action 函数 返回  返回对象 reducer 重新计算， 本身是同步的  不支持异步
        使用 redux-thunk 中间件， 底层是闭包， 闭包了原 dispatch 的能力， 失去异步请求接口， 获得数据， 再将数据dispatch 同步action  对象作为paylaod

- 受控组件和非受控组件
    - 受控
        1. 受控组件通过props获取值， 并通过 回调函数通知变化 Input
        2. 表单状态发生变化， 都会通知react， 交给react 管理
        3. 受控组件中， 组件渲染出来的状态与他的value 或者checked 对应单项绑定
        4. 受控组件会更新state的流程

    - 非受控
        数据存储在DOM中， 不在组件内 类似于传统html表单
        - ref