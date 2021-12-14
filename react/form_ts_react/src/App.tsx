import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { PageB } from './pages/pageB'
import { LoginContainer } from './pages/LoginContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={ LoginContainer } />
        <Route path="/pageB" component={ PageB } />
      </Switch>
    </Router>
  )
}

export default App
