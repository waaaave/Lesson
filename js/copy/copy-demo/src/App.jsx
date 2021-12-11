import React, { useEffect } from 'react';
import 'antd/dist/antd.css'
import logo from './logo.svg'
import {useClipboard} from 'use-clipboard-copy'
import './App.css'
import {message} from 'antd'

function App() {
  
  // 如何在js中查找DOM
  const ref = React.createRef()
  console.log(ref);

  useEffect(() => {
    console.log(ref);
  },[])

  const clipboard = useClipboard()

  const doCopy = function(){
    clipboard.copy()
    message.success('复制成功')
  }

  return (
    <div className="App">
     <input type="text" ref={clipboard.target} />
     <button onClick={doCopy}>复制</button>
    </div>
  )
}

export default App
