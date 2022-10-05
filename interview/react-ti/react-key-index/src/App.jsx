import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [list, setList] = useState(['tom', 'jack', 'rose'])

  return (
    <div className="App">
      <ul>
        {
          list.map((item, index) =>(
            <li key={index}>
              {item}
              <input type="text" name="" id="" />
            </li>
          ))
        }
      </ul>
      <button onClick={() => setList(['jerry', ...list])}>添加数据</button>
    </div>
  )
}

export default App
