import React, { Component, useEffect, useRef, useState } from 'react'
// Component 组件基类 函数式编程之前使用的类式编程

function App() {
    const [count, setCount] = useState(0)
    const timer = useRef()
    useEffect(() => {
        timer.current = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
    },[])

    useEffect(() => {
        if (count == 5) {
            clearInterval(timer.current)
        }
    }, [count])

    return (
        <div>
            <h1>Hello World</h1>
            <h2>{count}</h2>
        </div>
    )
}


export default App