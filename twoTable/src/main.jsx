import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Router from './Router'
import './mock'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
