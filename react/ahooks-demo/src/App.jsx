import React, {useState} from 'react';
import { useRequest } from 'ahooks';
import {message} from 'antd'
import 'antd/dist/antd.css'

// react 的数据绑定是单向的
function App(){
  const changeUsername = (username) => {
    // console.log(username,'..........');
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve({success: true})
      }, 1000);
    })
  }
  const [state,setState] = useState('')
  const {data, loading, run} = useRequest(changeUsername,{
    manual: true,
    onSuccess:(result, params) => {
      if(result.success){
        setState('')
        message.success('提交成功')
      }
    }

  }) 
  return(
    <>
      <p>{data && JSON.stringify(data)}</p>
      <input 
        type="text" 
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder='place enter message'
        style={{width:240,marginRight:16}}
        />
        <button disabled={loading} type='button' onClick={() => run(state) }>
          {loading?'loading':'edit'}
        </button>
    </>
  )
}

export default App