- 登录
  表单 token 

- useReducer 的老大是 React.createContext()
  React.createContext（） 是上下文对象
  context 上面有个 provider 属性 和 react-redux Provider 组件

  useReducer(reducer 纯函数， initialState)
  state, dispatch
  把  state, dispatch 交给context 之后就实现了Reducer 状态的跨层级共享

- React.createContext + useContext 一支穿云箭 =====> useContext(context)
  value 来相见
  App.jsx export const authContext
  Context.Provider value={state, dispatch}

- Redux 1.跨层级 2. userReducer 状态的严格转变 

1. hooks 使用useReducer+useContext 实现数据共享 （createContext+export）,状态集中管理（reducer），reducer纯函数严格把控状态改变（case）
  所有组件共享到安全的状态
2. redux数据管理哲学得以继承