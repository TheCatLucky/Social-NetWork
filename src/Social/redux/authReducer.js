import { stopSubmit } from 'redux-form';
import { authAPI } from './../API/Api';

const SET_USER_DATA = "SET_USER_DATA";
const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
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

export const checkAuth = () => (dispatch) => {
  return authAPI.getMe()
    .then(data => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    })
}

export const logIn = (email, password, rememberMe) => (dispatch) => {
  authAPI.logIn(email, password, rememberMe)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(checkAuth())
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


export default authReducer;