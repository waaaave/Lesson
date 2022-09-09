import { useState } from 'react'
import { useRequest } from 'ahooks'
import { getUsername } from './api/request'

// 请求数据 --> 变成状态
// data 状态
// laoding 状态
// error 状态
function App() {
  const {data:userName, error, loading} = useRequest(getUsername)

  if (error) return <div>failed to load</div>
  if (loading) return <div>loading...</div>


  return (
    <div className="App">
      Username: {userName}
    </div>
  )
}

export default App
