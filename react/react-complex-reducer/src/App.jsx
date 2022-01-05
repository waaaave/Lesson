import { useState } from 'react'
import './App.css'
import {Provider} from 'react-redux'
import store from './store'
import Router from './router'
// import { connect } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
