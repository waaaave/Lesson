import React, { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const Header = () => {
  
  const { state, dispatch} = useContext(AuthContext)
  console.log(state);

  return(
    <div>
      Header
      {state.isAuthenticated?<div>
        {state.user.name}: 登录了{state.token.t}
        <button onClick={() => dispatch({
          type: 'LOGOUT'
        })}>
          退出
        </button>
        </div>:<div>未登录
        <button onClick={() => dispatch({
          type: "LOGIN",
          payload: {
            user: {
              name:'yage',
              age:18
            },
             token: {t:'111111112e'}
          }
        })}>
          登录
        </button>
          </div>}
    </div>
  )
}

export default Header