import { listReducer } from './listReducers';
import { selectedTabReducer } from './selectedTabReducers';
import { combineReducers } from "redux";

export default combineReducers({
  list: listReducer,
  selectedTab: selectedTabReducer,
});