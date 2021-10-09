//数据仓库
import{ createStore, combineReducers } from 'redux';
import topics from './reducer/topics'

export default createStore(
    //单一状态仓库
    combineReducers({
        topics
    })
)