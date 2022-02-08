import { AppStateType } from "../ReduxStore";

export const getUsersState = (state: AppStateType) => state.usersPage;
export const getProfileState = (state: AppStateType) => state.profilePage;
export const getAuthState = (state: AppStateType) => state.auth;
export const getDialogsState = (state: AppStateType) => state.dialogsPage;