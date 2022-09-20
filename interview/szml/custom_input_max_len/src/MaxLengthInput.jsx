import React from 'react'
import { useState } from 'react'

export default function MaxLenInput(props){
    const{
        defaultValue='',
        maxLength
    } = props
    const [curLen, setCurLen] = useState(0);
    const [value, setValue] = useState(defaultValue)
    const{
        onChange
    } = props

    const inputChange = (event) =>{
        onChange(value, event)
        setCurLen(value.length)
        setValue(value)
    }

    return(
        <div className="wrapper">
            <input type="text"value={value} onChange={inputChange} />
            <div className="len_container">{curLen}/{maxLength}</div>
        </div>
    )
}