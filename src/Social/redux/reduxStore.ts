import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import appReducer from "./appReducer";
import authReducer from "./authReducer";
import diallogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: diallogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
export default store;