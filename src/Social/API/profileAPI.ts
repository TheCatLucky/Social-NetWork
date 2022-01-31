import { instance, ResponseType } from "./Api";
import { PhotosType, ProfileType } from "./../types/types";
type SavePhotoType = {
  photos: PhotosType
}
export const profileAPI = {
  getProfile(id: number) {
    return instance.get<ProfileType>(`profile/${id}`).then((response) => {
      console.log(response.status, "Получение профиля");
      return response.data;
    });
  },
  getStatus(id: number) {
    return instance.get<string>(`/profile/status/${id}`).then((response) => {
      console.log(response.status, "Получение статуса");
      return response.data;
    });
  },
  updateStatus(status: string) {
    return instance
      .put<ResponseType>(`/profile/status`, {
        status,
      })
      .then((response) => {
        console.log(response.status, "Обновление статуса");
        return response.data;
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
      .then((response) => {
        console.log(response.status, "Фото отправлено");
        return response.data;
      });
  },
};
