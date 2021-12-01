import * as React from 'react';
import { Color } from '../model/color'



interface Props {
  color:Color
}

// 优雅 简洁
// tsx 最核心的东西加约束
// 只有React.FC(interface||type  来自于@types/React)
// ts 是js 的超集
// 1. 组件是函数式组件
// 2. 父组件 一定要给它传某个值
// <> 泛型 可以泛指内部的一个重要类型
export const ColorBrowser:React.FC<Props> = (props) =>{
  
  const divStyle:React.CSSProperties = {
    width:'12rem',
    height:'7rem',
    backgroundColor:`rgb(${props.color.red},${props.color.green},${props.color.blue})`
  }

  return <div style={divStyle} />
}