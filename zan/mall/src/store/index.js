import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import reducer from "./reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));



// import { reducer as mainReducer } from '../pages/Main/store/index'


// const store = createStore(combineReducers({
//     main: mainReducer,
// }),composeEnhancers(applyMiddleware(thunk)))
export default store;