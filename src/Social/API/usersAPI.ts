import { GetItemsType, instance, ResponseType } from "./Api";
export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
      console.log(response.status, "Получение пользователей");
      return response.data;
    });
  },
  followUser(id: number) {
    return instance.post<ResponseType>(`follow/${id}`).then((response) => {
      console.log(response.status, "follow");
      return response.data;
    });
  },
  unfollowUser(id: number) {
    return instance.delete<ResponseType>(`follow/${id}`).then((response) => {
      console.log(response.status, "unfollow");
      return response.data;
    });
  },
};
