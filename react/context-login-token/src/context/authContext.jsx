import React from 'react';

// 登录上下文环境
export const AuthContext = React.createContext();

export const authInitialState = {
  isAuthenticated: false,
  user: null,
  token: null // 每次请求都会带上
}

export const authReducer = (state, action) => {
  switch(action.type){
    case 'LOGIN':
      // LocalStorage 的存储
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      localStorage.setItem('token', JSON.stringify(action.payload.token))
      return{
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token // 令牌
      }
    case 'LOGOUT':
      return{
        ...state,
        isAuthenticated: false,
        user: null,
        token: null
      }
    default:
      return state
  }
}