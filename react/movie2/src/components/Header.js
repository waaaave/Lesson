const Header = (props) => {
    //别的页面可以继续用
    return (
        //JSX
        <header className="App-header">
            <h2>{props.text}</h2>
        </header>
    )
}

export default Header;