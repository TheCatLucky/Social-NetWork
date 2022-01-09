import { checkAuth } from "./authReducer";

const SET_INITIALIZE = 'SET_INITIALIZE'

let initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZE:
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }
}

const initializedSuccess = () => ({ type: SET_INITIALIZE });

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(checkAuth());
  promise.then(() => {
    dispatch(initializedSuccess());
  })
}

export default appReducer