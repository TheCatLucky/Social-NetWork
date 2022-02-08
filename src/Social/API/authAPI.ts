import { LoginFormValuesType } from "../components/Login/Login";
import { instance, ResponseType, ResultCodesEnumCaptcha } from "./Api";
export type MeResponseDataType = {
	id: number;
	email: string;
	login: string;
};
export type LoginResponseDataType = {
	userId: number;
};
export const authAPI = {
	getMe() {
		return instance.get<ResponseType<MeResponseDataType>>(`auth/me`).then(({ status, data }) => {
			console.log(status, "Авторизация");
			return data;
		});
	},
	logIn({ email, password, rememberMe, captcha }: LoginFormValuesType) {
		return instance
			.post<ResponseType<LoginResponseDataType, ResultCodesEnumCaptcha>>(`auth/login`, {
				email,
				password,
				rememberMe,
				captcha,
			})
			.then(({ status, data }) => {
				console.log(status, "Логинизация");
				return data;
			});
	},
	logOut() {
		return instance.delete<ResponseType>(`auth/login`).then(({ status, data }) => {
			console.log(status, "Разлогинен");
			return data;
		});
	},
};
