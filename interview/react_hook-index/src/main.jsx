import React from 'react'
import ReactDOM from 'react-dom'

// 类似自定义hooks 是一个use开头的函数 参数是default 返回值是[state, setState]
let state = [] // 全局state
let hookIndex = 0 // hooks 的顺序索引

const useState = (initialState) => {
  // useState只有一个
  // 但是响应式对象有很多个

  state[hookIndex] = state[hookIndex] || initialState  //默认值或自身的值
  
  //闭包
  let curHookIndex = hookIndex 
  const setState = (value) => {
    state[curHookIndex] = value
    render();
  }
  const ret = [state[hookIndex],setState]
  hookIndex++
  return ret

}

const useEffect = (callback, deps) => {
  const lastDeps = state[hookIndex]
  console.log(hookIndex);
  let hasNoDeps = false // 有没有依赖 默认没有 []
  let hasDepsChanged = false // 依赖有没有改变
  if(!deps){
    hasNoDeps = true
  }else{
    if(!lastDeps){
      hasDepsChanged = true
    }else{
      hasDepsChanged = deps.some((item, index) => {
        return item !== lastDeps[index]
      })
    }
  }
  if (hasNoDeps || hasDepsChanged){
    callback()
    state[hookIndex] = deps
  }
  hookIndex++
}

function App() {
  const [count, setCount] = useState(100)
  const [age, setAge] = useState(16)


  const onIncrement = () => {
    setCount(count + 1)
  }

  const onAgeIncrement = () => {
    setAge(age + 1)
  }

  useEffect(() => {
    console.log('2 effe');
  },[])

  useEffect(() => {
    console.log('3 effe', count, age);
  },[count,age])

  return (
    <div className="App">
        <div style={{backgroundColor:'pink', padding:'10'}}>
        <h1>
          计数器：{count}
        </h1>
        <button onClick={onIncrement}>++++</button>
        <hr />
        <h1>
          年龄：{age}
        </h1>
        <button onClick={onAgeIncrement}>age++++</button>
        </div>
    </div>
  )
}

function render(){
  ReactDOM.render(<App/>, document.getElementById('root'))
  hookIndex = 0;
}

render()

export default App
