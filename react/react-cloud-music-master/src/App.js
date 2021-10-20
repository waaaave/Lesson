import React from 'react';
import { Provider} from 'react-redux'
import  store  from './store';
import RecommendList from './application/Recommend';


function App(){
  return(
    //加入数据流管理
    <Provider store={store}>
      <RecommendList />
    </Provider>
  )
}

export default App;