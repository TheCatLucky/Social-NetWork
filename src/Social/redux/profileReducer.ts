import { ResultCodesEnum } from "../API/Api";
import { profileAPI } from "../API/profileAPI";
import { PhotosType, PostsType, ProfileType } from "../types/types";
import { BaseThunkType, InferActionsTypes } from "./reduxStore";

type InitialStateType = typeof initialState;
const initialState = {
	postsData: [
		{ id: 0, message: "Hello", name: "Kira", age: "13" },
		{ id: 1, message: "How are you?", name: "Line", age: 52 },
		{ id: 2, message: "Are you fine?", name: "Lina", age: 12 },
		{ id: 3, message: "How old are you?", name: "Kostya", age: 53 },
		{ id: 4, message: "Glad to see you", name: "Dasha", age: 36 },
	] as Array<PostsType>,
	profile: null as ProfileType | null,
	status: "",
};
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType>;
const profileReducer = (
	state: InitialStateType = initialState,
	action: ActionsType
): InitialStateType => {
	switch (action.type) {
		case "ADD_POST":
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
		case "REMOVE_POST":
			return {
				...state,
				postsData: state.postsData.filter((p) => p.id !== action.id),
			};
		case "SET_USER_PROFILE":
			return {
				...state,
				profile: action.profile,
			};
		case "SET_STATUS":
			return {
				...state,
				status: action.status,
			};

		case "SET_PHOTO_SUCCESS":
			return {
				...state,
				profile: { ...state.profile, photos: action.photo } as ProfileType,
			};
		default:
			return state;
	}
};
export const actions = {
	addPost: (postText: string) =>
		({
			type: "ADD_POST",
			postText: postText,
		} as const),
	removePost: (id: number) =>
		({
			type: "REMOVE_POST",
			id,
		} as const),
	savePhotoSuccess: (photo: PhotosType) =>
		({
			type: "SET_PHOTO_SUCCESS",
			photo,
		} as const),
	setStatus: (status: string) =>
		({
			type: "SET_STATUS",
			status: status,
		} as const),
	setUserProfile: (profile: ProfileType) =>
		({
			type: "SET_USER_PROFILE",
			profile,
		} as const),
};
export const getProfile =
	(userId: number): ThunkType =>
	(dispatch) => {
		profileAPI.getProfile(userId).then((data) => {
			dispatch(actions.setUserProfile(data));
		});
	};
export const getStatus =
	(id: number): ThunkType =>
	(dispatch) => {
		profileAPI.getStatus(id).then((data) => {
			dispatch(actions.setStatus(data));
		});
	};
export const updateStatus =
	(status: string): ThunkType =>
	(dispatch) => {
		profileAPI.updateStatus(status).then((data) => {
			if (data.resultCode === ResultCodesEnum.Success) {
				dispatch(actions.setStatus(status));
			}
		});
	};
export const savePhoto =
	(file: File): ThunkType =>
	(dispatch) => {
		profileAPI.savePhoto(file).then((data) => {
			if (data.resultCode === ResultCodesEnum.Success) {
				dispatch(actions.savePhotoSuccess(data.data.photos));
			}
		});
	};

export default profileReducer;
