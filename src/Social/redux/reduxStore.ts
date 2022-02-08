import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as formReducer } from "redux-form";
import thunk, { ThunkAction } from "redux-thunk";
import appReducer from "./Reducers/AppReducer";
import authReducer from "./Reducers/AuthReducer";
import diallogsReducer from "./Reducers/DialogsReducer";
import profileReducer from "./Reducers/ProfileReducer";
import UsersReducer from "./Reducers/UsersReducer";

const rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: diallogsReducer,
	usersPage: UsersReducer,
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
