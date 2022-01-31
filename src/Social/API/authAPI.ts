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
    return instance.get<ResponseType<MeResponseDataType>>(`auth/me`).then((response) => {
      console.log(response.status, "Авторизация");
      return response.data;
    });
  },
  logIn(email: string, password: string, rememberMe: boolean, captcha: string | null) {
    return instance
      .post<ResponseType<LoginResponseDataType, ResultCodesEnumCaptcha>>(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((response) => {
        console.log(response.status, "Логинизация");
        return response.data;
      });
  },
  logOut() {
    return instance.delete<ResponseType>(`auth/login`).then((response) => {
      console.log(response.status, "Разлогинен");
      return response.data;
    });
  },
};
