import { profileAPI, usersAPI } from './../API/Api';
const ADD_POST = 'ADD-POST';
const REMOVE_POST = "REMOVE-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const CHANGE_STATUS = "CHANGE_STATUS";
const SET_PHOTO_SUCCESS = "SET_PHOTO_SUCCESS";


const initialState = {
  postsData: [
    { id: 1, message: "Hello", name: "Kira", age: "13" },
    { id: 2, message: "How are you?", name: "Line", age: 52 },
    { id: 3, message: "Are you fine?", name: "Lina", age: 12 },
    { id: 4, message: "How old are you?", name: "Kostya", age: 53 },
    { id: 5, message: "Glad to see you", name: "Dasha", age: 36 },
  ],
  profile: null,
  status: "",
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      if (action.postText === undefined) {
        return state;
      }
      let newPost = {
        id: state.postsData.length + 1,
        message: action.postText,
        name: "Masha",
        age: 20
      }
      return {
        ...state,
        postsData: [...state.postsData, newPost],
      }
    case REMOVE_POST:
      return {
        ...state,
        postsData: state.postsData.filter(p => p.id !== action.id)
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    case CHANGE_STATUS:
      return {
        ...state,
        status: action.status
      }
    case SET_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {...state.profile, photos: action.photo}
      }
    default:
      return state;
  }
}
export const addPost = (postText) => ({
  type: ADD_POST,
  postText: postText
});
export const removePost = (id) => ({
  type: REMOVE_POST,
  id
})
export const savePhotoSuccess = (photo) => ({
  type: SET_PHOTO_SUCCESS,
  photo
})

const setStatus = (status) => ({
  type: SET_STATUS,
  status: status
})
const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
})

export const changeStatus = (status) => (
  {
    type: CHANGE_STATUS,
    status
  }
)

export const getProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId)
    .then(data => {
      dispatch(setUserProfile(data));
    })
}
export const getStatus = (status) => (dispatch) => {
  profileAPI.getStatus(status)
    .then(data => {
      dispatch(setStatus(data));
    })
}
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    })
}
export const savePhoto = (file) => (dispatch) => {

  profileAPI.savePhoto(file)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos));
      }
    })
}

export default profileReducer;