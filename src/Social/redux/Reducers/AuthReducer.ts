import { FormAction, stopSubmit } from "redux-form";
import { ResultCodesEnum, ResultCodesEnumCaptcha } from "../../API/Api";
import { authAPI } from "../../API/authAPI";
import { securityAPI } from "../../API/securityAPI";
import { LoginFormValuesType } from "../../components/Login/Login";
import { BaseThunkType, InferActionsTypes } from "../ReduxStore";

type InitialStateType = typeof initialState;

const initialState = {
	userId: null as number | null,
	email: null as string | null,
	login: null as string | null,
	isAuth: false as boolean,
	captchaURL: null as string | null,
};

type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType | FormAction>;
const authReducer = (
	state: InitialStateType = initialState,
	action: ActionsType
): InitialStateType => {
	switch (action.type) {
		case "SET_USER_DATA":
			return {
				...state,
				...action.payload,
			};
		case "SET_CAPTCHA_URL":
			return {
				...state,
				captchaURL: action.payload.captchaUrl,
			};
		default:
			return state;
	}
};
const actions = {
	setAuthUserData: (
		userId: number | null,
		email: string | null,
		login: string | null,
		isAuth: boolean
	) =>
		({
			type: "SET_USER_DATA",
			payload: {
				userId,
				email,
				login,
				isAuth,
			},
		} as const),
	setCaptchaURL: (captchaUrl: string) =>
		({
			type: "SET_CAPTCHA_URL",
			payload: {
				captchaUrl,
			},
		} as const),
};

export const checkAuth = (): ThunkType => (dispatch) => {
	return authAPI.getMe().then((data) => {
		if (data.resultCode === ResultCodesEnum.Success) {
			let { id, login, email } = data.data;
			dispatch(actions.setAuthUserData(id, email, login, true));
		}
	});
};

export const logIn =
	(formData: LoginFormValuesType): ThunkType =>
	(dispatch) => {
		authAPI.logIn(formData).then(({ resultCode, messages }) => {
			if (resultCode === ResultCodesEnumCaptcha.Success) {
				dispatch(checkAuth());
			} else {
				if (resultCode === ResultCodesEnumCaptcha.CapthaIsRequired) {
					dispatch(getCaptchaUrl());
				} else {
					let message = messages.length > 0 ? messages[0] : "Some Error";
					dispatch(stopSubmit("login", { _error: message }));
				}
			}
		});
	};
export const logOut = (): ThunkType => (dispatch) => {
	authAPI.logOut().then(({ resultCode }) => {
		if (resultCode === ResultCodesEnum.Success) {
			dispatch(actions.setAuthUserData(null, null, null, false));
		}
	});
};
export const getCaptchaUrl = (): ThunkType => (dispatch) => {
	securityAPI.getCaptureUrl().then(({url}) => {
		console.log(url);
		dispatch(actions.setCaptchaURL(url));
	});
};

export default authReducer;
