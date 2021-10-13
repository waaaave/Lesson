import {createStore, combineReducers} from 'redux';
import  user from './reducers/user'

//      根节点是store
// 子树有topics user comments

//创建一个状态仓库,数据从本地来到中央
export default createStore (
    combineReducers({
        // topics,
        user,
        // comments
    })
)