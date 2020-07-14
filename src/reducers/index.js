import { combineReducers } from "redux";
import postReducers from "./postReducers";

//reducer- function that used to update store
// two arg-state, action
// state- old state/state before update
// action -what happened/ what update
// return updated or old updated
export default combineReducers({
  items: postReducers,
});
