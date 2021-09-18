import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
const App = () =>{
  return(
    <div>
      <Header text="React Hooks Movie"/>
      <Search/>
      <Movie/>
    </div>
  )
}
export default App;