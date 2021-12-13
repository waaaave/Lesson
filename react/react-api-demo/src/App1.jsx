import React, { useState, useEffect, useRef, createRef } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    // const timer = createRef(); // 获取DOM
    const timer = useRef()
  // useEffect(() => {
  //   // 挂载
  //   setCount(count + 1)
  // },[])

  useEffect(() => {
    // console.log(timer);
    timer.current = setInterval(() => {
      
      setCount(count => count + 1)
    },1000)
  },[])
  useEffect(() => {
    if (count >= 5) {
      clearInterval(timer.current)
    }
  },[count])

  // const addCount = function (){
  //   setCount(count + 1)
  // }

  // const [count, setCount] = useState(0)
  // useEffect(() => {
  //   const test1 = setInterval(() => {
  //     setCount(c => c + 1)
  //   }, 1000);
  //   test1;
  //   setTimeout(() => {
  //     clearInterval(test1);
  //   }, 5000);
  // },[])
  return (
    <div className="App">
      {count}
      {/* <button onClick={addCount}>+1</button> */}
    </div>
  )
}

export default App
