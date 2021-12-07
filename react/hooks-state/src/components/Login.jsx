import React, { useContext, useState } from 'react';
import { AuthContext } from '../App';

const Login = () => {
  
  const { dispatch } = useContext(AuthContext);

  const initialState = {
    email: '',
    password: '',
    isSubmitting: false,
    errorMessage: null
  }
  // 内部状态
  const [data,setData] = useState(initialState)
  const handleInputChange = (event) =>{
    setData({
      ...data,
      [event.target.name]:event.target.value
    })
  }
  const handleFormSubmit = event => {
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null
    })
    fetch('https://www.fastmock.site/mock/4f8c468ae7202f91850147535d932340/sbt/ali/login',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: data.email,
          password: data.password
        })
      }
    )
      .then(res => res.json())
      .then(resJSON => {
        console.log(resJSON);
      })

  }

  return(
    <div className="login-container">
      <div className="card">
        <div className="container">
          <form onSubmit={handleFormSubmit}>
            <h1>Login</h1>
            <label htmlFor="email">Email Address
            <input 
              type='email' 
              name='email'
              onChange={handleInputChange}
              value={data.email} 
              id='email' />
            </label>

            <label htmlFor="password">Password
            <input 
              type='password' 
              name='password'
              onChange={handleInputChange}
              value={data.password} 
              id='password' />
            </label>
            {data.errorMessage&&(
              <span className='form-error'>{data.errorMessage}</span>
            )}
            <button disabled={data.isSubmitting} type='submit'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login