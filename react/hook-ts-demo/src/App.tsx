// import React, { useState } from 'react';
// import './App.css';


// // type UserInfo = {name:string,age:number,sex:string}
// // type GameInfo = {score:number,win:boolean}
// // type CounterInfo = {initNum:number}
// type ArticleInfo = {title:string,content:string}
// // 冒号是ts的开始 ： any叫做任意类型
// //React.Fc FunctionComponent
// //泛指函数FC组件内部props{} 是一个UserInfo类型
// // const User:React.FC<UserInfo> = ({name,age,sex}) => {
// //   return (
// //       <div className="User">
// //         <p>{name}</p>
// //         <p>{age}</p>
// //         <p>{sex}</p>
// //       </div>
// //   )
// // }

// // const Counter:React.FC<CounterInfo> = ({initNum}) =>{
// //   const [count,setCount] = useState(initNum)
// //     return(
// //       <>
// //         {count}
// //         <button onClick={()=>setCount(count+1)}>+++</button>
// //         <button onClick={()=>setCount(count-1)}>---</button>
// //       </>
// //     )
// // }

// const Article:React.FC<ArticleInfo> =({title,content})=>{
//     return(
//       <article>
//         <header>
//           <h1>{title}</h1>
//         </header>
//         <main>
//           {content}
//         </main>
//       </article>
//     )
// }

// // JS ->ts
// function App() {
//   return (
//     <div className="App">
//       <Article title="标题" content="内容" />
//      {/* <User name="太锋" age={20} sex="男"/> */}
//      {/* <Counter initNum = {5} /> */}
//     </div>
//   );
// }

// export default App;
import React,{useState} from 'react';
import {HelloComponen} from './hello'
import {NameEditComponent} from './nameEdit'

//ts 在写的过程中就发现问题
//ts js超集
export const App =()=>{
  const[name,setName] = useState('defaultUserName');
  const setUserNameState = (newName:string)=>{
    setName(newName)
  }
  return(
    <>
      <HelloComponen userName={name}  />
      <NameEditComponent initialUserName={name} 
      onNameUpdate={setUserNameState}/>

    </>
  )
}
export default App;