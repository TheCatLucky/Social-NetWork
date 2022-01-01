import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import diallogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import thunk from "redux-thunk"
import { reducer as formReducer } from "redux-form"

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: diallogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;
export default store;