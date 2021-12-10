import { combineReducers, createStore } from "redux";
import diallogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
  profilePage : profileReducer,
  dialogsPage : diallogsReducer,
});

let store = createStore(reducers);

export default store;