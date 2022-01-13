import { combineReducers } from 'redux';
import { reducer as mainReducer } from '../pages/Main/store/index'
import { reducer as serverReducer } from '../pages/server/store/index'
import { reducer as detailReducer } from '../pages/detail/store/index'



export default combineReducers({
    main: mainReducer,
    server: serverReducer,
    detail: detailReducer,
});