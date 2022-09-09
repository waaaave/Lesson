import { useState, useEffect, useRef } from 'react'
import useLocalstorageState from './useLocalstorageState'
useLocalstorageState

function App() {
  const STORAGE_NAME = 'app_theme'
  const ADD_STORAGE_NAME = 'address'
  const defaultValue = {
    theme: '前端',
    address: '范家'
  }
  // 然后和把值存在localstorage
  // const [value, setValue] = useState(() => {
  //   const storage = localStorage.getItem(STORAGE_NAME)
  //   return storage || ''
  // })
  const [value, setValue] = useLocalstorageState(STORAGE_NAME, defaultValue.theme)
  const [address, setAddress] = useLocalstorageState(ADD_STORAGE_NAME, defaultValue.address)
  const [testA, setTestA] = useState('A')
  const ref = useRef()


  useEffect(() => {
    setTestA('b')
    ref.current = 'B'
    console.log(testA, ref.current);
  }, [])
  


  return (
    <div className="App">
      <input value={value} onChange={e => setValue(e.target.value)} />
      <input value={address} onChange={e => setAddress(e.target.value)} />
    </div>
  )
}

export default App
