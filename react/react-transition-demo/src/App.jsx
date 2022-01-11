import React, { useState } from 'react'
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'
import './App.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'



const Home = () => {
  return (
    <div className='page home'>
      Home
    </div>
  )
}

const About = () => {
  return (
    <div className='page about'>
      About
    </div>
  )
}

function App() {

  return (
    <BrowserRouter>


      <nav>
        <Link to='/' className='aa'>Home</Link>
        <Link to='/about' className='aa'>About</Link>
      </nav>
      <TransitionGroup
        className={'router-wrapper'}
        childFactory={child => React.cloneElement(child, 'forward-from-right-enter')}
      >
        <CSSTransition timeout={500}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </BrowserRouter>
  )
}

export default App
