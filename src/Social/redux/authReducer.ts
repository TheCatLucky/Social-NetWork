import { stopSubmit } from "redux-form";
import { authAPI, ResultCodesEnum, securityAPI } from "../API/Api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";
type InitialStateType = typeof initialState;
export type SetAuthUserDataType = {
  type: typeof SET_USER_DATA;
  payload: {
    userId: number | null;
    email: string | null;
    login: string | null;
    isAuth: boolean;
  };
};
export type SetCaptchaURLType = {
  type: typeof SET_CAPTCHA_URL;
  payload: { captchaUrl: string };
};
const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean,
  captchaURL: null as string | null,
};

const authReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaURL: action.payload.captchaUrl,
      };
    default:
      return state;
  }
};

const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetAuthUserDataType => ({
  type: SET_USER_DATA,
  payload: {
    userId,
    email,
    login,
    isAuth,
  },
});

const setCaptchaURL = (captchaUrl: string): SetCaptchaURLType => ({
  type: SET_CAPTCHA_URL,
  payload: {
    captchaUrl,
  },
});

export const checkAuth = () => (dispatch: any) => {
  return authAPI.getMe().then((data) => {
    if (data.resultCode === ResultCodesEnum.Success) {
      let { id, login, email } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
};

export const logIn = (email: string, password: string, rememberMe: boolean, captcha: string) => (dispatch: any) => {
  authAPI.logIn(email, password, rememberMe, captcha).then((data) => {
    if (data.resultCode === 0) {
      dispatch(checkAuth());
    } else if (data.resultCode === ResultCodesEnum.CapthaIsRequired) {
      dispatch(getCaptchaUrl());
    } else {
      let message = data.messages.length > 0 ? data.messages[0] : "Some Error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  });
};

export const logOut = () => (dispatch: any) => {
  authAPI.logOut().then((data: any) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

export const getCaptchaUrl = () => (dispatch: any) => {
  securityAPI.getCaptureUrl().then((data: any) => {
    console.log(data.url);
    dispatch(setCaptchaURL(data.url));
  });
};

export default authReducer;
