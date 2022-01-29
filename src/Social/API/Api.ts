import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "c1f0b7d1-dc16-41bd-b130-0fd123149d60",
    //c1f0b7d1-dc16-41bd-b130-0fd123149d60
    //52d41bee-1ff2-442f-88ef-58198d527466
  },
});

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
      console.log(response.status, "Получение пользователей");
      return response.data;
    });
  },
  followUser(id: number) {
    return instance.post(`follow/${id}`).then((response) => {
      console.log(response.status, "follow");
      return response.data;
    });
  },
  unfollowUser(id: number) {
    return instance.delete(`follow/${id}`).then((response) => {
      console.log(response.status, "unfollow");
      return response.data;
    });
  },
  getProfile(id: number) {
    return profileAPI.getProfile(id);
  },
};

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
  CapthaIsRequired = 10,
}

type MeResponseType = {
  data: {
    id: number;
    email: string;
    login: string;
  };
  resultCode: ResultCodesEnum;
  messages: Array<string>;
};

type LoginResponseType = {
  data: {
    userId: number;
  };
  resultCode: ResultCodesEnum;
  messages: Array<string>;
};
export const authAPI = {
  getMe() {
    return instance.get<MeResponseType>(`auth/me`).then((response) => {
      console.log(response.status, "Авторизация");
      return response.data;
    });
  },
  logIn(email: string, password: string, rememberMe: boolean, captcha: string | null) {
    return instance
      .post<LoginResponseType>(`auth/login`, {
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
    return instance.delete(`auth/login`).then((response) => {
      console.log(response.status, "Разлогинен");
      return response.data;
    });
  },
};
export const profileAPI = {
  getProfile(id: number) {
    return instance.get(`profile/${id}`).then((response) => {
      console.log(response.status, "Получение профиля");
      return response.data;
    });
  },
  getStatus(id: number) {
    return instance.get(`/profile/status/${id}`).then((response) => {
      console.log(response.status, "Получение статуса");
      return response.data;
    });
  },
  updateStatus(status: string) {
    return instance
      .put(`/profile/status`, {
        status,
      })
      .then((response) => {
        console.log(response.status, "Обновление статуса");
        return response.data;
      });
  },
  savePhoto(image: any) {
    const formData = new FormData();
    formData.append("image", image);
    return instance
      .put(`/profile/photo`, formData, {
        headers: {
          "Content-Type": "multipart*form-data",
        },
      })
      .then((response) => {
        console.log(response.status, "Фото отправлено");
        return response.data;
      });
  },
};
export const securityAPI = {
  getCaptureUrl() {
    return instance.get(`security/get-captcha-url`).then((response) => {
      console.log(response.status, "Получение капчи");
      return response.data;
    });
  },
};
