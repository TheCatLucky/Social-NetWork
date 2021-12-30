import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import diallogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import thunk from "redux-thunk"

const reducers = combineReducers({
  profilePage : profileReducer,
  dialogsPage: diallogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;
export default store;