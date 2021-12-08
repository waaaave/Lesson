- create-react-app appname react 官方
  npx create-react-app appname 不用安装 create-react-app
  npm init @vitejs/app appname --template react 来自yyx推荐 不使用webpack

- 我们想为购物车应用提供数据流管理
  1. 用一个Context.Provider 包住原有购物车UI组件树
    UI + 数据流
  2. 在父组件中可以通过{children}找到要包的子组件
    ProductsContextProvider 要写一下
      return JSX
      Context.Provider
        {children}
  3. context 被模块化了， 有专有文件夹