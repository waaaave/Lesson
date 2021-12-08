import { useToggle } from 'ahooks'
import './App.css'

// toggle 功能

function App() {
  // hooks 1.0
  // const [isOn, setIsOn] = useState(false)

  // const doToggle = () => {
  //   setIsOn(!isOn)
  // }

  // return (
  //   <div className="App">
  //     {isOn?'open':'off'}
  //     <button onClick={doToggle}>Toggle</button>
  //   </div>
  // )

  // ahooks 方法
  const [state,{ toggle }] = useToggle();

  return (
    <div className="App">
      <p>Effects: {`${state}`}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default App
