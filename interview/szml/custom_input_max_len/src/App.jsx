import { useState } from 'react'
import MaxLengthInput from './MaxLengthInput.jsx'


function App() {
  const len = 12
  const onChange = () => {

  }
  return (
    <div className="app">
      <MaxLengthInput defaultValue='泥嚎' onChange={onChange} MaxLength={len} />
    </div>
  )
}

export default App
