import * as React from "react";
// import style from  './hello.css'
import style from  './hello.styl'
console.log(style);


export const HelloComponent = () => {
  return <h2 className={style.txt}>Hello component !</h2>;
};
