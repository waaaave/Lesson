import { useState } from 'react'
import './App.css'

function App() {
  const {userInfo, setUserInfo}= useState({
    username: 'zf',
    pwd: '123'
  })

  const handleChange = (name) => (e) => {
    setUserInfo({
      ...userInfo,
      [name]: e.target.value
    })
  }

  return (
    <div className="App">
      <p>{userInfo.username}</p>
      用户名: 
      <input 
      type="text" 
      name='username' 
      value={userInfo.username} 
      onChange={handleChange('username')} 
      />
      <p>{userInfo.pwd}</p>
      密  码: 
      <input 
      type="password" 
      name='pwd' 
      value={userInfo.pwd}
      onChange={handleChange('pwd')} />
    </div>
  )
}

export default App
