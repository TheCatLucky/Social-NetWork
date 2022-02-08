import { instance } from "./Api";
type GetCaptchaUrlType = {
	url: string;
};
export const securityAPI = {
	getCaptureUrl() {
		return instance.get<GetCaptchaUrlType>(`security/get-captcha-url`).then(({ status, data }) => {
			console.log(status, "Получение капчи");
			return data;
		});
	},
};
