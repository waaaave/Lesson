import {createStore,combineReducers} from 'redux'
import topics from './reducer/topics'
//创建一个单一状态树 很复杂
//数据共享 不出问题

export default createStore(
  combineReducers({
    topics
  })
)