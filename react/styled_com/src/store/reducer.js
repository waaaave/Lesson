import { combineReducers } from "redux";
// aha
import { reducer as recommendReducer} from '../application/Recommend/store' 

// state.recommend.bannerList

export default combineReducers({
  recommend: recommendReducer
})