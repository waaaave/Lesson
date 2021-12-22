import { useState, useEffect } from 'react'
import { setToken } from './utils/auth'
import './App.css'
import { reqLogin } from './api/login'
import Router from './router'
function App() {

  // console.log(removeToken());

  useEffect(() => {
    reqLogin({ usernamr: 'admin', passworn: '123456' })
      .then(data => {
        const { token } = data
        // console.log(data);
        setToken(token)
      })
  }, [])

  return (
    <Router>
      <div className="App">

      </div>
    </Router>

  )
}

export default App
