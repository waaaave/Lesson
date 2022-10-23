import { useRef, useEffect } from 'react'
import './App.css'

function App() {
  const h1Ref = useRef()
  useEffect(() => {
    console.log('useRef');
    console.log(h1Ref.current);
  },[])

  return (
    <div className="App">
      <h1 ref={h1Ref}>Hello World</h1>
    </div>
  )
}

export default App
