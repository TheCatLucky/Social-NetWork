import { instance, ResponseType } from "./Api";
import { PhotosType, ProfileType } from "./../types/types";
type SavePhotoType = {
	photos: PhotosType;
};
export const profileAPI = {
	getProfile(id: number) {
		return instance.get<ProfileType>(`profile/${id}`).then(({ status, data }) => {
			console.log(status, "Получение профиля");
			return data;
		});
	},
	getStatus(id: number) {
		return instance.get<string>(`/profile/status/${id}`).then(({ status, data }) => {
			console.log(status, "Получение статуса");
			return data;
		});
	},
	updateStatus(status: string) {
		return instance
			.put<ResponseType>(`/profile/status`, {
				status,
			})
			.then(({ status, data }) => {
				console.log(status, "Обновление статуса");
				return data;
			});
	},
	savePhoto(image: File) {
		const formData = new FormData();
		formData.append("image", image);
		return instance
			.put<ResponseType<SavePhotoType>>(`/profile/photo`, formData, {
				headers: {
					"Content-Type": "multipart*form-data",
				},
			})
			.then(({status,data}) => {
				console.log(status, "Фото отправлено");
				return data;
			});
	},
};
