// 1. API层调用
  // 数据请求 作用域Promise 限制其中的泛型 <LoginEntity>
// 2. 组件component props 父子组件之间传参时

export interface LoginEntity {
  login: string;
  password: string;
}