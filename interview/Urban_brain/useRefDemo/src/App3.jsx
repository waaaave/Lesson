import React, { Component, useEffect, useRef} from 'react'
// Component 组件基类 函数式编程之前使用的类式编程

function App() {
    const childRef = useRef()
    useEffect(() => {
        console.log(childRef);
        childRef.current.handleLog()
    }, [])
    return (
        <div>
            <h1>Hello World</h1>
            <Child ref={childRef} count="1"/>
        </div>
    )
}

// 类式编程
class Child extends Component{

    handleLog = () => {
        console.log('Child Component');
    }

    render(){
        const { count } = this.props
        return(
            <h2>
                count:{count}
            </h2>
        )
    }
}

export default App