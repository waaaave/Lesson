import React, {useEffect} from 'react';
import { apiLogin } from './api/user.api';
import './App.css';


// 从component -> lifeCycle -> api（拦截一下 axios request + 404 + mockjs） -> …… backend

function App() {

  useEffect(() =>{
    const fn = async () => { // 函数式编程思想
      // 通同源策略 ，职责分离 一个文件只有哦一件事
      await apiLogin({username:'root',password:'123456'})
    }
    fn();
    // return 
  },[])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
