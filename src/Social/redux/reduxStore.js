import { combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import diallogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
  profilePage : profileReducer,
  dialogsPage: diallogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers);
window.store = store;
export default store;