import React from "react"
//接口 父组件 App和子组件 Hello
// type 一般是一个类型的时候使用 接口可以添加很多种
interface Props{
    userName:string
}

export const HelloComponen:React.FC<Props> = ({userName}) =>{
    return(
        <>
            {userName}
        </>
    )
}