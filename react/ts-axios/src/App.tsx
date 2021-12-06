import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {  MemberTableComponent } from './components/memberTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MemberTableComponent/>
    </div>
  )
}

export default App
