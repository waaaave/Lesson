import { useState } from 'react'
import './App.css'
import { ColorBrowser } from './component/colorBrowswe'
import { ColorPicker } from './component/colorPicker'
import { Color } from './model/color'

function App() {
  // use 命名开始的钩子函数<>
  const [color,setColor] = useState<Color>({
    red:255,
    green:255,
    blue:2
  })

  return (
      <div>
        <ColorPicker color={color} onColorUpdated={setColor} />
        <ColorBrowser color={color} />
      </div>
      
  )
}

export default App
