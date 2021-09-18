import { useReducer, useEffect } from 'react';
import './App.css'
import { initialState, reducer } from './store/reducer';
import axios from 'axios';
import Movie from './components/Movie';
import spinner from './assets/ajax-loader.gif'
import Search from './components/Search';
console.log(spinner);



const App = () => {
  //与中央（store）联系，组件不再负责数据
  //useReducer useEffect api
  // loading (全局状态) movies 
  //1.联系上中央 不止管理数据还管理数据的流向和修改
  //2.联系上之后会把状态给你 state在某一时刻是既定的 initialstate初始状态 界面是动态的
  //对state的操作都是读操作，dispatch
  // const [state,dispatch] = userReducer(reducer, initialState)


  //useReducer 向中央申请数据
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state, dispatch);
  const { loading, movies, errorMessage } = state;
  // state.loading = false;

  //组件函数必须返回JSX
  //可以把HTML（xml是特殊情况下的使用方案） 在js里写出来
  useEffect(() => {
    console.log('onload');
    axios.get('https://www.omdbapi.com/?s=man&apikey=4a3b711b')
      .then(res => {
        let payload = res.data.Search;
        dispatch({
          type: 'SEARCH_MOVIES_SUCCESS',
          payload
        })
        //dispatch({
        //   type: 'SEARCH_MOVIES_SUCCESS',
        //   payload: []
        // })
      })
    console.log('onload');
    dispatch({
      type: 'lalala'
    })
  }, [])

  const search = searchValue => {
    dispatch({
      type: 'SEARCH_MOVIES_LOADING',
    })
    axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(res => {
        if (res.data.Error) {
          dispatch({
            type: 'SEARCH_MOVIES_ERROR',
            payload: res.data.Error
          })
          return;
        }
        console.log(res);
        let payload = res.data.Search
        dispatch({
          type: 'SEARCH_MOVIES_SUCCESS',
          payload
        })
      })
  }

  return (

    <div className="App">
      <Search search={search} />
      {
        loading ? <img src={spinner} className="spinner" alt="spinner" /> : ''
      }
      {
        movies.length ?
          <div className="movies">
            {movies.map(movie => <Movie movie={movie} key={movie.imdbID} />)}
          </div> : <p>${errorMessage}</p>
      }
      <div className="movies">
        {
          movies.map(movie => <Movie movie={movie} key={movie.imdbID} />)
        }
      </div>

    </div>
  )

};
export default App;