import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import appReducer from "./appReducer";
import authReducer from "./authReducer";
import diallogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: diallogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
window.store = store;
export default store;