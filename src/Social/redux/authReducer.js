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
        ...action.data,
        isAuth: true
      }
    default:
      return state;
  }
}

const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: {
    userId,
    email,
    login
  }
})

export const checkAuth = () => (dispatch) => {
  authAPI.getMe()
    .then(data => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthUserData(id, email, login));
      }
    })
}

export const logIn = (email, password) => (dispatch) => {
  console.log("object")
  authAPI.logIn(email, password)
    .then(data => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthUserData(id, email, login));
      }
    })
}


export default authReducer;