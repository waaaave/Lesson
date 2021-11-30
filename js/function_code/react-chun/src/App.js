import React, { useState, useContext} from 'react'
import './App.css';

// 类式组件
// 面向对象思想
// component 基类中为组件提供了那些方法？ --> render
// 类有什么组成 --> 属性 + 方法
// class Button extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       buttonText:'click me, please'
//     }
//   }
//   // 生命周期方法
//   componentDidMount(){
//     console.log('按钮挂载上去了');
//   }
//   handleClick(){
//     this.setState(() => {
//       return{
//         buttonText:'Thanks, been clicked'
//       }
//     })
//   }
//   // 单纯的就负责UI
//   render(){
//     const { buttonText } = this.state
//     return(
//       <>
//         <button onClick={this.handleClick}>{buttonText}</button>
//       </>
//     )
//   }
// }

// hooks 优秀的地方
// 1. 简洁 useState 作为内置的 hooks 代表， 秒杀 class 组件的复杂度
// 2. 函数式编程 以函数的方式来组织代码替代了类式编程
// 3. hooks 是钩子 return JSX + 钩子

//  在react老版本之中 早就有函数式组件了
//  React.FC

const Header = (props) => {
  return(
    <header>
      无状态函数式组件
    </header>
  )
}

const Button = () => {
  const [buttonText,setButtonText] = useState('click me, please');
  const handleClick = () => setButtonText('Thanks, been clicked')
  return(
    <button onClick={handleClick}>{buttonText}</button>
  )
}

const NavBar = () =>{
  const {username} = useContext(AppContext)
  return(
    <div className='navbar'>
      <p>{username}</p>
    </div>
  )
}

const AppContext = React.createContext({})

const Messages = () =>{
  const {username} = useContext(AppContext)

  return(
    <div className='messages'>
      <p>Message for {username}</p>
    </div>
  )
}

function App() {
  return (
    <>
    <AppContext.Provider value={{
      username:'Mr. Li'
    }}>
      <NavBar/>
      <Messages/>
      <Header />
      <Button />
    </AppContext.Provider>
    </>
  );
}

export default App;
