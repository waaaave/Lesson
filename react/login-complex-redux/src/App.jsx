import { useState, useEffect } from 'react'
import { setToken } from './utils/auth'
import './App.css'
import { reqLogin } from './api/login'
import { Provider } from 'react-redux'
import store from './store'
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

    <Provider store={store}>
      <Router>
        <div className="App">

        </div>
      </Router>
    </Provider>

  )
}

export default App
