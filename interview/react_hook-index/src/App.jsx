import React from 'react'
import ReactDOM from 'react-dom'

let state = [];
let hookIndex = 0;


const useState = (initialState) => {
    state[hookIndex] = state[hookIndex] || initialState;
   
    // 修改状态的函数
    let curHookIndex = hookIndex;
    const setState = (value) => {
      state[curHookIndex] = value;
      // 重新渲染组件
      render();
    };
   
    // Tuple 类型
   
    const ret = [state[hookIndex], setState];
   
    hookIndex++;
    return ret;
  };


  

const App = () => {
    const [count, setCount] = useState(100);
    const [age, setAge] = useState(16);
   
    // +1
    const onIncrement = () => {
      setCount(count + 1);
    };
   
    const onAgeIncrement = () => {
      setAge(age + 1);
    };
   
    return (
      <div style={{ backgroundColor: 'pink', padding: 10 }}>
        <h1>计数器：{count}</h1>
        <button onClick={onIncrement}>+1</button>
   
        <hr />
        <p>年龄：{age}</p>
        <button onClick={onAgeIncrement}>年龄+1</button>
      </div>
    );
  };



  function render() {
    ReactDOM.render(<App />, document.getElementById('root'));
   
    // 重置 hookIndex 的值
    hookIndex = 0;
  }
  render();