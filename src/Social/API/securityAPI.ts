import { instance } from "./Api";
type GetCaptchaUrlType = {
  url:string
}
export const securityAPI = {
  getCaptureUrl() {
    return instance.get<GetCaptchaUrlType>(`security/get-captcha-url`).then((response) => {
      console.log(response.status, "Получение капчи");
      return response.data;
    });
  },
};
