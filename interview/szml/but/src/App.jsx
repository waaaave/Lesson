import { useState } from 'react'
import reactLogo from './assets/react.svg'
import VerifyCode from './1'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <VerifyCode/>
    </div>
  )
}

export default App
