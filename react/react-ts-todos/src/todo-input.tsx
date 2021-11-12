import React, { useState } from 'react'
import {Input} from 'antd'

// 表单组件中 TS 需要承担那些职责
// input onChange 父组件 props
// 1. 约束父组件的传参 interface(父子组件的接口) props 需要满足
// 2. 组建的类型
// 3. onChange 事件在ts中也有约束 ReactDOM onChange

interface Props{
  placeholder: string
  onSetQuery: (value:string) => void
  
}

const TodoInput:React.FC<Props> = ({ placeholder, onSetQuery }) => {

  const [value, setValue] = useState('')

  return (
    <section className="input-wrap">
      <Input
        value={value}
        onChange={ e => setValue(e.target.value)}
      />
    </section>
  )
}

export default TodoInput