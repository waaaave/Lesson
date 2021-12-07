import React, { useReducer } from 'react'
import Header from './components/Header'
import Login from './components/Login'
import Home from './components/Home'
import './App.css'

// 用户的登录状态天生需要共享
// 跨层级调用
// 在context 的父级提供context 输出
export const AuthContext = React.createContext();
// redux reducer中的初始值
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
}
const reducer = (state, action) => {
  switch(action.type){
    case 'LOGOUT':
      return{
        ...state,
        isAuthenticated: false,
        user: null,
        token: null
      }
    case 'LOGIN':
      return{
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user
      }
    default:
      return state
  }
}

function App() {
  // state reducer 状态树
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <AuthContext.Provider value={{
      state,
      dispatch
    }}>
      <Header />
      <div className="App">{!state.isAuthenticated?<Login/>:<Home/>}</div>
    </AuthContext.Provider>
  )
}

export default App
