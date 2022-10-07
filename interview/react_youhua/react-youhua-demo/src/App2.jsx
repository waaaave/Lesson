import React, { useState, useContext } from 'react'

//useContext 跨级别共享状态
const ThemeContext = React.createContext()

// props ？ 父组件传递的props 没有修改 子组件就不重新渲染
// 组件通过函数重新执行达到响应式以及组件树更新的能力
// react Memo 在父组件传递了函数时 就达不到优化的效果 所以使用 useCallback + useMemo
export function ChildNonTheme() {
  console.log('不关心皮肤的子组件渲染了');
  return <div>我不关心皮肤，皮肤改变的时候别让我渲染！</div>
}

const ChildNonThemeMemo = React.memo(ChildNonTheme)
export function ChildWithTheme() {
  // 为了方便使用context 的hook 
  // 消费
  const theme = useContext(ThemeContext)
  return <div>我是有皮肤的哦~{theme}</div>
}

function App() {
  const [theme, setTheme] = useState('light')
  const onChangeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <button onClick={onChangeTheme}>改变皮肤</button>
        <ChildWithTheme />
        {/* <ChildNonTheme /> */}
        <ChildNonThemeMemo/>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
