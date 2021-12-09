import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/authContext';

const AddSong = () => {

  const {state, dispatch} = useContext(AuthContext)
  console.log(state);

  useEffect(function(){
    fetch('https://www.fastmock.site/mock/4f8c468ae7202f91850147535d932340/sbt/ali/login',{
      method: 'post',
      headers: {
        Authorization: `${state.token.t}`,
        'Content-Type':'application/json'
      },
      // 请求体
      body: JSON.stringify({
        username: '111',
        password: '111'
      })
    })
  },[])

  return(
    <div>

    </div>
  )
} 
export default AddSong