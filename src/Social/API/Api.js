import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "c1f0b7d1-dc16-41bd-b130-0fd123149d60"
    //c1f0b7d1-dc16-41bd-b130-0fd123149d60
    //52d41bee-1ff2-442f-88ef-58198d527466
  }
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        console.log(response.status);
        return (
          response.data
        )
      })
  },
  followUser(id) {
    return instance.post(`follow/${id}`)
      .then(response => {
        console.log(response.status);
        return (
          response.data
        )
      })
  },
  unfollowUser(id) {
    return instance.delete(`follow/${id}`)
      .then(response => {
        console.log(response.status);
        return (
          response.data
        )
      })
  },
  getProfile(id) {
    return profileAPI.getProfile(id)
  },
}

export const authAPI = {
  getMe() {
    return instance.get(`auth/me`)
      .then(response => {
        console.log(response.status, "Авторизация");
        return (
          response.data
        )
      })
  },
  logIn(email, password, rememberMe) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe
    })
      .then(response => {
        console.log(response.status, "Логинизация");
        console.log(response.data);
        return (
          response.data
        )
      })
  },
  logOut() {
    return instance.delete(`auth/login`)
      .then(response => {
        console.log(response.status, "Разлогинен");
        console.log(response.data);
        return (
          response.data
        )
      })
  }
}
export const profileAPI = {
  getProfile(id) {
    return instance.get(`profile/${id}`)
      .then(response => {
        console.log(response.status, "Получение профиля");
        return (
          response.data
        )
      })
  },
  getStatus(id) {
    return instance.get(`/profile/status/${id}`)
      .then(response => {
        console.log(response.status, "Получение статуса");
        return (
          response.data
        )
      })
  },
  updateStatus(status) {
    return instance.put(`/profile/status`, {
      status,
    })
      .then(response => {
        console.log(response.status, "Обновление статуса");
        return (
          response.data
        )
      })
  }
}

