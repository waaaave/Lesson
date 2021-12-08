import React, { useEffect, useState } from 'react';
import { useKeyPress } from 'ahooks';


const App = () => {

  const [counter,setCounter] = useState(0)
  // useEffect(() => {
  //   document.addEventListener('keydown', function(event){
  //     // console.log(event);
  //     if (event.keyCode == 40) {
  //       // setCounter(counter - 1)
  //       setCounter((s)=> s-1)
  //     }
  //     if (event.keyCode == 38) {
  //       // setCounter(counter + 1)
  //       setCounter((s)=> s+1)
  //     }
  //   });
  // },[])

  useKeyPress('uparrow', () => {
    setCounter((s) => s + 1);
  });

  // keyCode value for ArrowDown
  useKeyPress(40, () => {
    setCounter((s) => s - 1);
  });

  return (
    <div>
      <p>Try pressing the following: </p>
      <div>1. Press ArrowUp by key to increase</div>
      <div>2. Press ArrowDown by keyCode to decrease</div>
      <div>
        counter: <span style={{ color: '#f00' }}>{counter}</span>
      </div>
    </div>
  );
}

export default App