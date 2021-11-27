import { createStore } from 'redux'
// 单一状态树
import reducer  from './reducer';

const store = createStore(reducer);

export default store;