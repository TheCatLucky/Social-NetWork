import { combineReducers, createStore } from "redux";
import diallogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
  profilePage : profileReducer,
  dialogsPage: diallogsReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);
window.store = store;
export default store;