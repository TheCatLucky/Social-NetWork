import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk, { ThunkAction } from "redux-thunk";
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
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;
export type BaseThunkType<A extends Action, R = void> = ThunkAction<R, AppStateType, unknown, A>;
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
export default store;
