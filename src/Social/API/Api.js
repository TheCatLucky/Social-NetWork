import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "bd9714f6-c218-4b7b-a6dd-1b93dea43c0c"
    //bd9714f6-c218-4b7b-a6dd-1b93dea43c0c
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
        console.log(response.status);
        return (
          response.data
        )
      })
  },
  logIn(email, password) {
    return instance.post(`auth/login`, {
      email,
      password
    })
      .then(response => {
        console.log(response.status);
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
        console.log(response.status);
        return (
          response.data
        )
      })
  },
  getStatus(id) {
    return instance.get(`/profile/status/${id}`)
      .then(response => {
        console.log(response.status);
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
        console.log(response.status);
        return (
          response.data
        )
      })
  }
}

