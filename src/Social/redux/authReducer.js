import { stopSubmit } from 'redux-form';
import { authAPI, securityAPI } from './../API/Api';

const SET_USER_DATA = "SET_USER_DATA";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";
const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaURL: null,

}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaURL : action.payload.url
      }
    default:
      return state;
  }
}

const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: {
    userId,
    email,
    login,
    isAuth
  }
})
const setCaptchaURL = (url) => ({
  type: SET_CAPTCHA_URL,
  payload: {
   url
  }
})

export const checkAuth = () => (dispatch) => {
  return authAPI.getMe()
    .then(data => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    })
}

export const logIn = (email, password, rememberMe, captcha) => (dispatch) => {
  authAPI.logIn(email, password, rememberMe, captcha)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(checkAuth())
      }
      else if (data.resultCode === 10) {
        dispatch(getCaptchaUrl())
      }
      else {
        let message = data.messages.length > 0 ? data.messages[0] : "Some Error"
        dispatch(stopSubmit("login", { _error: message }));
      }
    })
}

export const logOut = () => (dispatch) => {
  authAPI.logOut()
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    })
}

export const getCaptchaUrl = () => (dispatch) => {
  securityAPI.getCaptureUrl()
    .then(data => {
      console.log(data.url);
      dispatch(setCaptchaURL(data.url))
    })
}

export default authReducer;