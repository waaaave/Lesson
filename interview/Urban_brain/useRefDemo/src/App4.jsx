import React, { Component, useEffect, useState } from 'react'
// Component 组件基类 函数式编程之前使用的类式编程

function App() {
    const [count, setCount] = useState(1)
    let interval
    useEffect(() => {
        interval = setInterval(() => {
            setCount(count => count + 1)
        }, 1000);

        console.log(interval,'11111111111111');

    }, [])

    useEffect(() =>{
        if (count == 6) {
        console.log(interval,'222222222222');
            clearInterval(interval)
            setCount(1)
        }
    },[count])
    return (
        <div>
            <h1>Hello World</h1>
            <h2>{count}</h2>
        </div>
    )
}


export default App