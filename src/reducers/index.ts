import { listReducer } from './listReducers';
import { combineReducers } from "redux";

export default combineReducers({
  list: listReducer,
});