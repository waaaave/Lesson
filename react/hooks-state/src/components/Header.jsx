// 拿到登录状态
import React,{useContext, useEffect} from 'react';
import { AuthContext } from '../App';

const Header = () => {

  const {state, dispatch} = useContext(AuthContext)
  // console.log(state);
  // 修改用户的登录状态 dispatch
  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch({type:'LOGIN',payload:{isAuthenticated: true, user:{name:'keli'}}})
  //   }, 2000);
  // },[])

  return(
    <nav id='navigation'>
      <h1 href='#' className='logo'>
        HOOKED
      </h1>
      <button onClick={() => dispatch({
        type: 'LOGOUT'
      })}>

      </button>
    </nav>
  )
}

export default Header