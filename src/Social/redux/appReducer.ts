import { checkAuth } from "./authReducer";

const SET_INITIALIZE = "SET_INITIALIZE";
export type SetInitializeType = {
  type: typeof SET_INITIALIZE;
};
type InitialStateType = typeof initialState;
let initialState = {
  initialized: false as boolean,
};

const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_INITIALIZE:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

const initializedSuccess = (): SetInitializeType => ({ type: SET_INITIALIZE });

export const initializeApp = () => (dispatch: any) => {
  dispatch(checkAuth()).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
