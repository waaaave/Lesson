import { useState, useEffect, useReducer } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
//react引入图片的方式
import spinner from './assets/ajax-loader.gif';
//放心的把数据交给中央 
import { initialState, reducer } from './store/reducer';
import axios from 'axios';

// state:页面的数据状态
// usestate添加状态
const App = () => {
  //useReducer 向中央申请数据
  const [state, dispatch] = useReducer(reducer, initialState);


  console.log(state);
  const { movies, errorMessage, loading } = state
  console.log(movies, errorMessage, loading);
  //axios 请求一个接口，先设置到中央 movies=>dispatch 给reducer ,...state ,movies

  useEffect(() => {
    // loading 改下false
    axios.get('https://www.omdbapi.com/?s=man&apikey=4a3b711b')
      .then(data => {
        // console.log(data);
        dispatch({
          type: 'SEARCH_MOVIES_SUCCESS',
          payload: data.data.Search
        })
      })
  }, [])

  return (
    <div>
      <Header text="React Hooks Movie" />
      <Search />
      {
        loading ? <img className="spinner" src={spinner} /> : ''
      }
      {
        movies.map(movie => movie && <Movie movie={movie} />)
      }

    </div>
  )
}
export default App;