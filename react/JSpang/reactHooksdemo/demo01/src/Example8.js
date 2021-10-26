import React, { useEffect, useRef, useState } from 'react';

function Example8(){
  const inputEl = useRef(null)
  const onButtonClick = ()=>{
    inputEl.current.value = 'hello'
    console.log(inputEl);
  }

  const [text,setText] = useState('wave')
  const textRef = useRef()

  useEffect(()=>{
    textRef.current = text
    console.log(textRef.current,'----------');
  })

  return(
    <>
      <input ref={inputEl} type='text'/>
      <button onClick={onButtonClick}>show words</button>
      <br/>
      <br/>
      <input value={text} onChange={(e)=>{setText(e.target.value)}} />
    </>
  )

}

export default Example8