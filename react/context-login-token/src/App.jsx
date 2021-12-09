import React, { useEffect, useReducer } from 'react'
import './App.css'
import AddSong from './component/AddSong';
import Header from './component/Header';
import { AuthContext, authInitialState, authReducer} from './context/authContext'

function App() {
  //  比useState 更严格的状态管理
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch({
  //       type: "LOGIN",
  //       payload: {
  //         user: 'yzx',
  //          token: '11111111'
  //       }})
  //   }, 1000);
  // },[])

  return (
    <AuthContext.Provider value={{
      state,
      dispatch
    }}>
      <Header/>
      {state.isAuthenticated && <AddSong/>}
    </AuthContext.Provider>
  )
}

export default App
