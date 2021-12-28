import * as  axios from "axios"

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "5856dcea-06c0-4ca1-9e62-e0ffe633f265"
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
    return instance.get(`profile/${id}`)
      .then(response => {
        console.log(response.status);
        return (
          response.data
        )
      })
  },
  getCurrentUser() {
    return instance.get(`auth/me`)
      .then(response => {
        console.log(response.status);
        return (
          response.data
        )
      })
  }

}

