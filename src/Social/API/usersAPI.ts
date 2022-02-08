import { FilterType } from "../redux/Reducers/UsersReducer";
import { GetItemsType, instance, ResponseType } from "./Api";
export const usersAPI = {
  getUsers(currentPage: number, pageSize: number, { term, friend }: FilterType) {

		return instance
			.get<GetItemsType>(
				`users?page=${currentPage}&count=${pageSize}` +
					(term ? `&term=${term}` : "") +
					(friend === null ? "" : `&friend=${friend}`)
			)
			.then(({ status, data }) => {
				console.log(status, "Получение пользователей");
				return data;
			});
	},
	followUser(id: number) {
		return instance.post<ResponseType>(`follow/${id}`).then(({ status, data }) => {
			console.log(status, "follow");
			return data;
		});
	},
	unfollowUser(id: number) {
		return instance.delete<ResponseType>(`follow/${id}`).then(({ status, data }) => {
			console.log(status, "unfollow");
			return data;
		});
	},
};
