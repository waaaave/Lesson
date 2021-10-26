import React, { Children, useMemo, useState } from 'react';

function Example7(){
  const [xiaohong, setXiaohong] = useState('小红在待客状态')
  const [zhiling, setZhiling] = useState('志玲在待客状态')
  return(
    <div>
      <button onClick={()=>{setXiaohong(new Date().getTime())}} >xiaohong</button>
      <button onClick={()=>{setZhiling(new Date().getTime()+'zzzz walk to me')}} >zhiling</button>
      <ChildComponent name ={xiaohong}>{zhiling}</ChildComponent>
    </div>
  )
}
function ChildComponent ({name,children}){
  function changeXiaohong(){
    console.log('she is coming');
    return name+'walk to me'
  }

  const actionXiaohong = useMemo(()=>changeXiaohong(name),[name])

  return(
    <>
      <div>{actionXiaohong}</div>
      <div>{children}</div>
    </>
  )
}

export default Example7