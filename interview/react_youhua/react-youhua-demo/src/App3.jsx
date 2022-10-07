import { useState, useContext, createContext } from 'react'

const ThemeContext = createContext()

export function ChildNonTheme() {
    console.log('不关心皮肤的子组件渲染了');
    return <div>我不关心皮肤，皮肤改变的时候别让我渲染！</div>
}

export function ChildWithTheme() {
    // 为了方便使用context 的hook 
    // 消费
    const theme = useContext(ThemeContext)
    return <div>我是有皮肤的哦~{theme}</div>
}

function ThemeApp({ children }) {
    const [theme, setTheme] = useState('light')
    const onChangeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
    return (
        <ThemeContext.Provider value={theme}>
            <button onClick={onChangeTheme}>改变皮肤</button>
            {children}
        </ThemeContext.Provider>

    )

}


function App() {

    return (
        <div className="App">
            <ThemeApp>
                <ChildWithTheme />
                <ChildNonTheme />
            </ThemeApp>
        </div>
    )
}

export default App