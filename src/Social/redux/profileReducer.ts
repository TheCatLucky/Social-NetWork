import { profileAPI, usersAPI } from "../API/Api";
import { PhotosType, PostsType, ProfileType } from "../types/types";
const ADD_POST = "ADD-POST";
const REMOVE_POST = "REMOVE-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const CHANGE_STATUS = "CHANGE_STATUS";
const SET_PHOTO_SUCCESS = "SET_PHOTO_SUCCESS";

type InitialStateType = typeof initialState;
const initialState = {
  postsData: [
    { id: 1, message: "Hello", name: "Kira", age: "13" },
    { id: 2, message: "How are you?", name: "Line", age: 52 },
    { id: 3, message: "Are you fine?", name: "Lina", age: 12 },
    { id: 4, message: "How old are you?", name: "Kostya", age: 53 },
    { id: 5, message: "Glad to see you", name: "Dasha", age: 36 },
  ] as Array<PostsType>,
  profile: null as ProfileType | null,
  status: "",
};
const profileReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      if (action.postText === undefined) {
        return state;
      }
      let newPost = {
        id: state.postsData.length + 1,
        message: action.postText,
        name: "Masha",
        age: 20,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
      };
    case REMOVE_POST:
      return {
        ...state,
        postsData: state.postsData.filter((p) => p.id !== action.id),
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case CHANGE_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SET_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photo } as ProfileType,
      };
    default:
      return state;
  }
};
export type AddPostType = {
  type: typeof ADD_POST;
  postText: string;
};
export type RemovePostType = {
  type: typeof REMOVE_POST;
  id: number;
};
export type SetStatusType = {
  type: typeof SET_STATUS;
  status: string;
};
export type ChangeStatusType = {
  type: typeof CHANGE_STATUS;
  status: string;
};
export type SetUserProfileType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};
export type SavePhotoSuccessType = {
  type: typeof SET_PHOTO_SUCCESS;
  photo: PhotosType;
};
export const addPost = (postText: string): AddPostType => ({
  type: ADD_POST,
  postText: postText,
});
export const removePost = (id: number): RemovePostType => ({
  type: REMOVE_POST,
  id,
});
export const savePhotoSuccess = (photo: PhotosType): SavePhotoSuccessType => ({
  type: SET_PHOTO_SUCCESS,
  photo,
});

const setStatus = (status: string): SetStatusType => ({
  type: SET_STATUS,
  status: status,
});
const setUserProfile = (profile: ProfileType): SetUserProfileType => ({
  type: SET_USER_PROFILE,
  profile,
});

export const changeStatus = (status: string): ChangeStatusType => ({
  type: CHANGE_STATUS,
  status,
});

export const getProfile = (userId: number) => (dispatch: any) => {
  usersAPI.getProfile(userId).then((data: any) => {
    dispatch(setUserProfile(data));
  });
};
export const getStatus = (status: string) => (dispatch: any) => {
  profileAPI.getStatus(status).then((data: any) => {
    dispatch(setStatus(data));
  });
};
export const updateStatus = (status: string) => (dispatch: any) => {
  profileAPI.updateStatus(status).then((data: any) => {
    if (data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};
export const savePhoto = (file: any) => (dispatch: any) => {
  profileAPI.savePhoto(file).then((data: any) => {
    if (data.resultCode === 0) {
      dispatch(savePhotoSuccess(data.data.photos));
    }
  });
};

export default profileReducer;
